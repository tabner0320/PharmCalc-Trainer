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


    private sealed class HealthResponse
    {
        public string Message { get; set; } =
            string.Empty;
    }
}