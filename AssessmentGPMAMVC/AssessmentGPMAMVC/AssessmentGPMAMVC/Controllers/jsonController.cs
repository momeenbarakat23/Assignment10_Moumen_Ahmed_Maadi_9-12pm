using AssessmentGPMAMVC.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AssessmentGPMAMVC.Controllers
{
    public class jsonController : Controller
    {
        private readonly AssessmentGPMAContext context;

        public jsonController(AssessmentGPMAContext context)
        {
            this.context = context;
        }
        public IActionResult Index()
        {
            return View();
        }
        [Route("api/get-sections")]
        public IActionResult GetSectionsAsync()
        {
            var data =  context.Sections.Select(x=>x.Name).ToList();
            return Json(data);
        }
        [Route("api/get-Quest")]
        public async Task<JsonResult> GetQuestAsync()
        {
            var data = await context.Questions.Include(x=>x.Section).ToListAsync();
            return Json(data);
        }
    }
}
