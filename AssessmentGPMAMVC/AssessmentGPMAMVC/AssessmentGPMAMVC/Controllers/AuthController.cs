using AssessmentGPMA.Domain.models;
using AssessmentGPMAMVC.Securty;
using AssessmentGPMAMVC.ViewModel;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace AssessmentGPMAMVC.Controllers
{
    public class AuthController : Controller
    {
        private readonly SignInManager<AppUser> signInManager;
        private readonly IAuth auth;
        private readonly UserManager<AppUser> userManager;

        public AuthController(SignInManager<AppUser> signInManager, IAuth auth, UserManager<AppUser> _userManager)
        {
            this.signInManager = signInManager;
            this.auth = auth;
            this.userManager = _userManager;

        }
        [HttpGet]
        public IActionResult LogIn()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> LogIn(LoginViewModel loginViewModel)
        {
            if (ModelState.IsValid)
            {
                var result = await auth.LoginAsync(loginViewModel);
                if (result.Email != null && result.Password != null)
                {
                    return RedirectToAction("Index", "Home");
                }
            }
            ModelState.AddModelError("خطأ في تسجيل الدخول :", "الايميل او كلمه المرور غلط");

            return View(loginViewModel);

        }
        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Register(RegisterViewModel register)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var result = await auth.RegisterAsync(register);
                    if (result.UserName != null)
                    {
                        return RedirectToAction("Index", "Home");

                    }

                }
            }
            catch (Exception ex)
            {

                ModelState.AddModelError("", ex.Message);
            }


            return View(register);


        }



        public async Task<IActionResult> Signout()
        {
            await signInManager.SignOutAsync();
            return RedirectToAction("Index", "Home");
        }






    }
}
