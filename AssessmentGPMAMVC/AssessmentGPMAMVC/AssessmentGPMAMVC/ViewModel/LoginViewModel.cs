﻿using System.ComponentModel.DataAnnotations;

namespace AssessmentGPMAMVC.ViewModel
{
    public class LoginViewModel
    {
        
        public string Email { get; set; }

        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Display(Name = "Remember Me")]
        public bool RememberMe { get; set; }
    }
}
