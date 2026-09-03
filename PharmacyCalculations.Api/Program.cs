var builder = WebApplication.CreateBuilder(args);

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

app.Run();

public partial class Program
{
}