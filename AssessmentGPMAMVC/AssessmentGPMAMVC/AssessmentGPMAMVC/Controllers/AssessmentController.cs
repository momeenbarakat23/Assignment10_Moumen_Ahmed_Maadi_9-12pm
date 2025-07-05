using AssessmentGPMA.Domain.models;
using AssessmentGPMAMVC.Models;
using AssessmentGPMAMVC.ViewModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace AssessmentGPMAMVC.Controllers
{
    public class AssessmentController : Controller
    {
        private readonly AssessmentGPMAContext context;


        public AssessmentController(AssessmentGPMAContext context )
        {
            this.context = context;
        }
        public async Task< IActionResult> Index()
        {
            var data =new TestViewModel();
            var datafromDB =await context.Sections.Select(x=>x.Name).ToListAsync();
            var QUestsCount = await context.Questions.CountAsync();
            data.SectionName = datafromDB;
            return View(data);
        }
    
  

        public async Task GetScoreForSection(int ToTalSc ,List<int?> ScAllSec)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var test = new TestAttempt()
            {
                Score = ToTalSc,
               ScoreForSection=ScAllSec,
                UserId = userId,
                StartedAt = DateTime.UtcNow,

            };
            await context.TestAttempts.AddAsync(test);
            await context.SaveChangesAsync();

        }
    }
}
