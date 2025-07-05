
using AssessmentGPMAMVC.Models;
using Microsoft.AspNetCore.Identity;

namespace AssessmentGPMA.Domain.models
{
    public class AppUser : IdentityUser
    {
        public string city { get; set; }
        public string Name { get; set; }
        public ICollection<TestAttempt> TestAttempts { get; set; }
        public ICollection<UserAnswer> UserAnswers { get; set; }
  

    }
}
