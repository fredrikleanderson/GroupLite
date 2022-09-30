using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GroupLite.Utilities
{
    public interface IValidatorService
    {
        Task<bool> EmailIsValid(string email);
    }
}
