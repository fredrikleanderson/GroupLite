using System.Text.RegularExpressions;

namespace GroupLite.Utilities
{
    public class ValidatorService : IValidatorService
    {
        public Task<bool> EmailIsValid(string email)
        {
            return Task.Run(() => new Regex(@"^[a-z0-9._-]{1,70}@[a-z]{1,25}\.[a-z]{2,3}$").IsMatch(email.ToLower()));
        }
    }
}
