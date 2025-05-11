var builder = WebApplication.CreateBuilder(args);



builder.Services.AddControllers();


var app = builder.Build();



app.UseCors(x => x
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader()
);

app.UseRouting();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{Id?}"
);

app.Run();
