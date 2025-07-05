using AssessmentGPMA.Domain.models;
using AssessmentGPMAMVC.Models;
using AssessmentGPMAMVC.Securty;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddControllersWithViews();
var con = builder.Configuration.GetConnectionString("mycon");
builder.Services.AddDbContext<AssessmentGPMAContext>(x=>x.UseSqlServer(con));
builder.Services.AddScoped<IAuth, Auth>();
builder.Services.AddIdentity<AppUser, IdentityRole>(op =>
{
    op.User.RequireUniqueEmail = true;
    op.User.AllowedUserNameCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._@+";
}).AddEntityFrameworkStores<AssessmentGPMAContext>()
.AddDefaultTokenProviders();
builder.Services.AddCors(op =>
{
    op.AddDefaultPolicy(op =>
    {
        op.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
    });
});
builder.Services.AddControllers()
    .AddJsonOptions(x =>
        x.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles);



var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();
app.MapControllers();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
