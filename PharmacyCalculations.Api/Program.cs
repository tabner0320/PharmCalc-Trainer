using PharmacyCalculations.Api.Services;

var builder = WebApplication.CreateBuilder(args);

// Register the calculation service
builder.Services.AddSingleton<CalculationService>();

var app = builder.Build();

// Serve index.html, CSS, and JavaScript from wwwroot
app.UseDefaultFiles();
app.UseStaticFiles();


// ==========================================
// HEALTH ENDPOINT
// ==========================================

app.MapGet("/api/health", () =>
{
    return Results.Ok(new
    {
        message = "PharmCalc Trainer API is running."
    });
});


// ==========================================
// TABLET DOSAGE ENDPOINT
// ==========================================

app.MapPost("/api/calculate/tablet",
    (
        TabletCalculationRequest request,
        CalculationService service
    ) =>
    {
        // Dose available cannot be zero or negative
        if (request.DoseAvailable <= 0)
        {
            return Results.BadRequest(new
            {
                message =
                    "Dose available must be greater than zero."
            });
        }

        // Ordered dose and quantity cannot be negative
        if (request.DoseOrdered < 0 ||
            request.QuantityAvailable < 0)
        {
            return Results.BadRequest(new
            {
                message =
                    "Calculation values cannot be negative."
            });
        }

        var result =
            service.CalculateTabletDose(
                request.DoseOrdered,
                request.DoseAvailable,
                request.QuantityAvailable
            );

        return Results.Ok(new
        {
            amountToGive = result
        });
    });


// ==========================================
// LIQUID MEDICATION ENDPOINT
// ==========================================

app.MapPost("/api/calculate/liquid",
    (
        LiquidCalculationRequest request,
        CalculationService service
    ) =>
    {
        // Dose available cannot be zero or negative
        if (request.DoseAvailable <= 0)
        {
            return Results.BadRequest(new
            {
                message =
                    "Dose available must be greater than zero."
            });
        }

        // Ordered dose and volume cannot be negative
        if (request.DoseOrdered < 0 ||
            request.VolumeAvailable < 0)
        {
            return Results.BadRequest(new
            {
                message =
                    "Calculation values cannot be negative."
            });
        }

        var result =
            service.CalculateLiquidDose(
                request.DoseOrdered,
                request.DoseAvailable,
                request.VolumeAvailable
            );

        return Results.Ok(new
        {
            amountToGive = result
        });
    });


// ==========================================
// METRIC CONVERSION ENDPOINT
// ==========================================

app.MapPost("/api/convert",
    (
        MetricConversionRequest request,
        CalculationService service
    ) =>
    {
        // Make sure a conversion type was supplied
        if (string.IsNullOrWhiteSpace(
            request.ConversionType))
        {
            return Results.BadRequest(new
            {
                message =
                    "Conversion type is required."
            });
        }

        // Negative values are not accepted
        if (request.Value < 0)
        {
            return Results.BadRequest(new
            {
                message =
                    "Conversion value cannot be negative."
            });
        }

        decimal result;

        switch (request.ConversionType.ToLower())
        {
            case "g-to-mg":

                result =
                    service.ConvertGramsToMilligrams(
                        request.Value
                    );

                break;


            case "mg-to-g":

                result =
                    service.ConvertMilligramsToGrams(
                        request.Value
                    );

                break;


            case "mg-to-mcg":

                result =
                    service.ConvertMilligramsToMicrograms(
                        request.Value
                    );

                break;


            case "mcg-to-mg":

                result =
                    service.ConvertMicrogramsToMilligrams(
                        request.Value
                    );

                break;


            case "l-to-ml":

                result =
                    service.ConvertLitersToMilliliters(
                        request.Value
                    );

                break;


            case "ml-to-l":

                result =
                    service.ConvertMillilitersToLiters(
                        request.Value
                    );

                break;


            default:

                return Results.BadRequest(new
                {
                    message =
                        "Invalid conversion type."
                });
        }

        return Results.Ok(new
        {
            convertedValue = result
        });
    });


// ==========================================
// START APPLICATION
// ==========================================

app.Run();


// ==========================================
// REQUEST MODELS
// ==========================================

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


// ==========================================
// REQUIRED FOR INTEGRATION TESTING
// ==========================================

public partial class Program
{
}