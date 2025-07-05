
using AssessmentGPMA.Domain.models;
using AssessmentGPMAMVC.Models;
using AssessmentGPMAMVC.ViewModel;
using Microsoft.AspNetCore.Identity;

namespace AssessmentGPMAMVC.Securty
{
    public class Auth : IAuth
    {
        private readonly AssessmentGPMAContext appdbcontext;
        private readonly UserManager<AppUser> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly SignInManager<AppUser> signInManager;

        public Auth(AssessmentGPMAContext appdbcontext , UserManager<AppUser> userManager ,RoleManager<IdentityRole> roleManager
            ,SignInManager<AppUser> signInManager)
        {
            this.appdbcontext = appdbcontext;
            this.userManager = userManager;
            this.roleManager = roleManager;
            this.signInManager = signInManager;
        }
        public async Task<LoginViewModel> LoginAsync(LoginViewModel Login)
        {
            var result = new LoginViewModel();
            var User = await userManager.FindByEmailAsync(Login.Email);
            if (User != null)
            {
                var checkpass = await userManager.CheckPasswordAsync(User, Login.Password);
                if (checkpass)
                {
                    await signInManager.SignInAsync(User, Login.RememberMe);
                    return Login;
                }

            }
            return result;
        }

        public async Task<RegisterViewModel> RegisterAsync(RegisterViewModel register)
        {
            var result = new RegisterViewModel();
            var checkemail = await userManager.FindByEmailAsync(register.Email);
            if (checkemail !=null)
            {
                result.message = "الايميل متسجل قبل كده";
                return result;
            }
            
            var NewUser = new AppUser();
            NewUser.UserName=Guid.NewGuid().ToString();
            NewUser.Email = register.Email;
            NewUser.Name= register.UserName;
            NewUser.city=register.city;
            NewUser.PhoneNumber=register.Phone;
            var create =await userManager.CreateAsync(NewUser,register.Password);
            if (create.Succeeded) 
            {
                await signInManager.SignInAsync(NewUser,false);
                return register;

            }
            return result;

        }

        public Task<RoleViewModel> RoleAsync(RoleViewModel register)
        {
            throw new NotImplementedException();
        }
    }
}
