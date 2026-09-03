using System.Net;
using System.Net.Http.Json;
using Microsoft.AspNetCore.Mvc.Testing;

namespace PharmacyCalculations.Tests;

public class ApiTests
{
    [Fact]
    public async Task HealthEndpoint_ReturnsSuccessStatusCode()
    {
        await using var application =
            new WebApplicationFactory<Program>();

        using var client =
            application.CreateClient();

        var response =
            await client.GetAsync("/api/health");

        Assert.Equal(
            HttpStatusCode.OK,
            response.StatusCode
        );
    }


    [Fact]
    public async Task HealthEndpoint_ReturnsExpectedMessage()
    {
        await using var application =
            new WebApplicationFactory<Program>();

        using var client =
            application.CreateClient();

        var response =
            await client.GetFromJsonAsync<HealthResponse>(
                "/api/health"
            );

        Assert.NotNull(response);

        Assert.Equal(
            "PharmCalc Trainer API is running.",
            response.Message
        );
    }


    [Fact]
    public async Task TabletEndpoint_ReturnsCorrectCalculation()
    {
        await using var application =
            new WebApplicationFactory<Program>();

        using var client =
            application.CreateClient();

        var request = new
        {
            doseOrdered = 500,
            doseAvailable = 250,
            quantityAvailable = 1
        };

        var response = await client.PostAsJsonAsync(
            "/api/calculate/tablet",
            request
        );

        response.EnsureSuccessStatusCode();

        var result =
            await response.Content
                .ReadFromJsonAsync<CalculationResponse>();

        Assert.NotNull(result);

        Assert.Equal(
            2,
            result.AmountToGive
        );
    }


    [Fact]
    public async Task LiquidEndpoint_ReturnsCorrectCalculation()
    {
        await using var application =
            new WebApplicationFactory<Program>();

        using var client =
            application.CreateClient();

        var request = new
        {
            doseOrdered = 250,
            doseAvailable = 125,
            volumeAvailable = 5
        };

        var response = await client.PostAsJsonAsync(
            "/api/calculate/liquid",
            request
        );

        response.EnsureSuccessStatusCode();

        var result =
            await response.Content
                .ReadFromJsonAsync<CalculationResponse>();

        Assert.NotNull(result);

        Assert.Equal(
            10,
            result.AmountToGive
        );
    }


    [Fact]
    public async Task ConversionEndpoint_ReturnsCorrectCalculation()
    {
        await using var application =
            new WebApplicationFactory<Program>();

        using var client =
            application.CreateClient();

        var request = new
        {
            value = 1,
            conversionType = "g-to-mg"
        };

        var response = await client.PostAsJsonAsync(
            "/api/convert",
            request
        );

        response.EnsureSuccessStatusCode();

        var result =
            await response.Content
                .ReadFromJsonAsync<ConversionResponse>();

        Assert.NotNull(result);

        Assert.Equal(
            1000,
            result.ConvertedValue
        );
    }


    // ==========================================
    // BAD REQUEST TESTS
    // ==========================================

    [Fact]
    public async Task TabletEndpoint_ZeroDoseAvailable_ReturnsBadRequest()
    {
        await using var application =
            new WebApplicationFactory<Program>();

        using var client =
            application.CreateClient();

        var request = new
        {
            doseOrdered = 500,
            doseAvailable = 0,
            quantityAvailable = 1
        };

        var response = await client.PostAsJsonAsync(
            "/api/calculate/tablet",
            request
        );

        Assert.Equal(
            HttpStatusCode.BadRequest,
            response.StatusCode
        );
    }


    [Fact]
    public async Task LiquidEndpoint_ZeroDoseAvailable_ReturnsBadRequest()
    {
        await using var application =
            new WebApplicationFactory<Program>();

        using var client =
            application.CreateClient();

        var request = new
        {
            doseOrdered = 250,
            doseAvailable = 0,
            volumeAvailable = 5
        };

        var response = await client.PostAsJsonAsync(
            "/api/calculate/liquid",
            request
        );

        Assert.Equal(
            HttpStatusCode.BadRequest,
            response.StatusCode
        );
    }


    [Fact]
    public async Task ConversionEndpoint_InvalidType_ReturnsBadRequest()
    {
        await using var application =
            new WebApplicationFactory<Program>();

        using var client =
            application.CreateClient();

        var request = new
        {
            value = 1,
            conversionType = "invalid"
        };

        var response = await client.PostAsJsonAsync(
            "/api/convert",
            request
        );

        Assert.Equal(
            HttpStatusCode.BadRequest,
            response.StatusCode
        );
    }


    [Fact]
    public async Task ConversionEndpoint_MissingType_ReturnsBadRequest()
    {
        await using var application =
            new WebApplicationFactory<Program>();

        using var client =
            application.CreateClient();

        var request = new
        {
            value = 1,
            conversionType = ""
        };

        var response = await client.PostAsJsonAsync(
            "/api/convert",
            request
        );

        Assert.Equal(
            HttpStatusCode.BadRequest,
            response.StatusCode
        );
    }


    [Fact]
    public async Task ConversionEndpoint_NegativeValue_ReturnsBadRequest()
    {
        await using var application =
            new WebApplicationFactory<Program>();

        using var client =
            application.CreateClient();

        var request = new
        {
            value = -1,
            conversionType = "g-to-mg"
        };

        var response = await client.PostAsJsonAsync(
            "/api/convert",
            request
        );

        Assert.Equal(
            HttpStatusCode.BadRequest,
            response.StatusCode
        );
    }


    // ==========================================
    // RESPONSE MODELS USED BY TESTS
    // ==========================================

    private sealed class HealthResponse
    {
        public string Message { get; set; } =
            string.Empty;
    }


    private sealed class CalculationResponse
    {
        public decimal AmountToGive { get; set; }
    }


    private sealed class ConversionResponse
    {
        public decimal ConvertedValue { get; set; }
    }
}