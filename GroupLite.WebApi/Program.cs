using Azure.Identity;
using GroupLite.Data;
using GroupLite.Handlers;
using GroupLite.Utilities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

string keyVaultEndPoint = builder.Configuration["KeyVaultEndPoint"];
if (!builder.Environment.IsDevelopment())
{
    builder.Configuration.AddAzureKeyVault(new Uri(keyVaultEndPoint), new DefaultAzureCredential());
}

builder.Services.AddDbContext<DataContext>(x => x.UseSqlServer(builder.Configuration["Secrets:SwiftGroupingDb"]));
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

builder.Services.AddSingleton<ICodeService, CodeService>();
builder.Services.AddSingleton<IValidatorService, ValidatorService>();
builder.Services.AddScoped<IDataService, DataService>();
builder.Services.AddScoped<IUnitHandler, UnitHandler>();

var app = builder.Build();
app.UseSwagger();
app.UseSwaggerUI();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());

app.MapControllers();

app.Run();
