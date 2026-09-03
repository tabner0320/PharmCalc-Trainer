using PharmacyCalculations.Api.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<CalculationService>();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

app.MapGet("/api/health", () =>
{
    return Results.Ok(new
    {
        message = "PharmCalc Trainer API is running."
    });
});

app.MapPost("/api/calculate/tablet",
    (
        TabletCalculationRequest request,
        CalculationService service
    ) =>
    {
        var result = service.CalculateTabletDose(
            request.DoseOrdered,
            request.DoseAvailable,
            request.QuantityAvailable
        );

        return Results.Ok(new
        {
            amountToGive = result
        });
    });

app.MapPost("/api/calculate/liquid",
    (
        LiquidCalculationRequest request,
        CalculationService service
    ) =>
    {
        var result = service.CalculateLiquidDose(
            request.DoseOrdered,
            request.DoseAvailable,
            request.VolumeAvailable
        );

        return Results.Ok(new
        {
            amountToGive = result
        });
    });

app.MapPost("/api/convert",
    (
        MetricConversionRequest request,
        CalculationService service
    ) =>
    {
        decimal result;

        switch (request.ConversionType.ToLower())
        {
            case "g-to-mg":
                result =
                    service.ConvertGramsToMilligrams(request.Value);
                break;

            case "mg-to-g":
                result =
                    service.ConvertMilligramsToGrams(request.Value);
                break;

            case "mg-to-mcg":
                result =
                    service.ConvertMilligramsToMicrograms(request.Value);
                break;

            case "mcg-to-mg":
                result =
                    service.ConvertMicrogramsToMilligrams(request.Value);
                break;

            case "l-to-ml":
                result =
                    service.ConvertLitersToMilliliters(request.Value);
                break;

            case "ml-to-l":
                result =
                    service.ConvertMillilitersToLiters(request.Value);
                break;

            default:
                return Results.BadRequest(new
                {
                    message = "Invalid conversion type."
                });
        }

        return Results.Ok(new
        {
            convertedValue = result
        });
    });

app.Run();

public record TabletCalculationRequest(
    decimal DoseOrdered,
    decimal DoseAvailable,
    decimal QuantityAvailable
);

public record LiquidCalculationRequest(
    decimal DoseOrdered,
    decimal DoseAvailable,
    decimal VolumeAvailable
);

public record MetricConversionRequest(
    decimal Value,
    string ConversionType
);

public partial class Program
{
}