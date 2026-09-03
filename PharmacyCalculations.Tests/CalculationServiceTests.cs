using PharmacyCalculations.Api.Services;

namespace PharmacyCalculations.Tests;

public class CalculationServiceTests
{
    private readonly CalculationService _service = new();

    [Fact]
    public void CalculateTabletDose_ReturnsCorrectAmount()
    {
        var result = _service.CalculateTabletDose(
            500,
            250,
            1
        );

        Assert.Equal(2, result);
    }

    [Fact]
    public void CalculateLiquidDose_ReturnsCorrectAmount()
    {
        var result = _service.CalculateLiquidDose(
            250,
            125,
            5
        );

        Assert.Equal(10, result);
    }

    [Fact]
    public void ConvertGramsToMilligrams_ReturnsCorrectAmount()
    {
        var result =
            _service.ConvertGramsToMilligrams(1);

        Assert.Equal(1000, result);
    }

    [Fact]
    public void ConvertMilligramsToGrams_ReturnsCorrectAmount()
    {
        var result =
            _service.ConvertMilligramsToGrams(1000);

        Assert.Equal(1, result);
    }

    [Fact]
    public void ConvertMilligramsToMicrograms_ReturnsCorrectAmount()
    {
        var result =
            _service.ConvertMilligramsToMicrograms(1);

        Assert.Equal(1000, result);
    }

    [Fact]
    public void ConvertMicrogramsToMilligrams_ReturnsCorrectAmount()
    {
        var result =
            _service.ConvertMicrogramsToMilligrams(1000);

        Assert.Equal(1, result);
    }

    [Fact]
    public void ConvertLitersToMilliliters_ReturnsCorrectAmount()
    {
        var result =
            _service.ConvertLitersToMilliliters(1);

        Assert.Equal(1000, result);
    }

    [Fact]
    public void ConvertMillilitersToLiters_ReturnsCorrectAmount()
    {
        var result =
            _service.ConvertMillilitersToLiters(1000);

        Assert.Equal(1, result);
    }

    [Fact]
    public void CalculateTabletDose_WithZeroDoseAvailable_ThrowsException()
    {
        Assert.Throws<ArgumentException>(() =>
            _service.CalculateTabletDose(
                500,
                0,
                1
            )
        );
    }

    [Fact]
    public void CalculateLiquidDose_WithZeroDoseAvailable_ThrowsException()
    {
        Assert.Throws<ArgumentException>(() =>
            _service.CalculateLiquidDose(
                250,
                0,
                5
            )
        );
    }
}