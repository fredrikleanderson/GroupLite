using GroupLite.Entities;
using System.Text;

namespace GroupLite.Utilities
{
    public class CodeService : ICodeService
    {
        public string GenerateCode()
        {
            Random random = new Random();
            string characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            StringBuilder stringBuilder = new StringBuilder();

            for (int i = 0; i < 7; i++)
            {
                stringBuilder.Append(characters[random.Next(0, characters.Length)]);
            }

            return stringBuilder.ToString();
        }

        public Task GenerateCode(Unit unit)
        {
            unit.Code = GenerateCode();
            return Task.CompletedTask;
        }
    }
}