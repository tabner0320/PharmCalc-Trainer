namespace PharmacyCalculations.Api.Services;

public class CalculationService
{
    public decimal CalculateTabletDose(
        decimal doseOrdered,
        decimal doseAvailable,
        decimal quantityAvailable)
    {
        if (doseAvailable <= 0)
        {
            throw new ArgumentException(
                "Dose available must be greater than zero."
            );
        }

        return doseOrdered / doseAvailable * quantityAvailable;
    }

    public decimal CalculateLiquidDose(
        decimal doseOrdered,
        decimal doseAvailable,
        decimal volumeAvailable)
    {
        if (doseAvailable <= 0)
        {
            throw new ArgumentException(
                "Dose available must be greater than zero."
            );
        }

        return doseOrdered / doseAvailable * volumeAvailable;
    }

    public decimal ConvertGramsToMilligrams(decimal grams)
    {
        return grams * 1000;
    }

    public decimal ConvertMilligramsToGrams(decimal milligrams)
    {
        return milligrams / 1000;
    }

    public decimal ConvertMilligramsToMicrograms(decimal milligrams)
    {
        return milligrams * 1000;
    }

    public decimal ConvertMicrogramsToMilligrams(decimal micrograms)
    {
        return micrograms / 1000;
    }

    public decimal ConvertLitersToMilliliters(decimal liters)
    {
        return liters * 1000;
    }

    public decimal ConvertMillilitersToLiters(decimal milliliters)
    {
        return milliliters / 1000;
    }
}