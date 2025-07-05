

using AssessmentGPMAMVC.ViewModel;

namespace AssessmentGPMAMVC.Securty
{
    public interface IAuth
    {
        public Task<RegisterViewModel> RegisterAsync(RegisterViewModel register);
        public Task<LoginViewModel> LoginAsync(LoginViewModel Login);
        public Task<RoleViewModel> RoleAsync(RoleViewModel register);
    }
}
