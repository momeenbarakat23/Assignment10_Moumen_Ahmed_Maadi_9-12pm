using AssessmentGPMAMVC.Models;
using AssessmentGPMAMVC.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace AssessmentGPMAMVC.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ScoresController : ControllerBase
    {
        private readonly AssessmentGPMAContext context;

        public ScoresController(AssessmentGPMAContext context)
        {
            this.context = context;
        }
        [HttpPost("GetScoreForSection")]
        public async Task<IActionResult> GetScoreForSection([FromBody] DataViewModel testView)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            var test = new TestAttempt()
            {
                Score = testView.ToTalSc,
                ScoreForSection = testView.ScAllSec,
                UserId = userId,
                StartedAt = DateTime.UtcNow,
            };

            await context.TestAttempts.AddAsync(test);
            await context.SaveChangesAsync();

            return Ok(new { message = "تم الحفظ" });
        }
    }

}
