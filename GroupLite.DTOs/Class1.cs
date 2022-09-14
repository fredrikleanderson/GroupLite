using GroupLite.Entities;
using System.Text;

namespace GroupLite.DTOs
{
    public class UnitRequest
    {
        public int? Id { get; set; }
        public Teacher Teacher { get; set; } = null!;
        public ICollection<Student> Students { get; set; } = null!;

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
    }

    public class UnitResponse
    {
        public int Id { get; set; }
        public string Code { get; set; } = null!;
        public ICollection<Student> Students { get; set; } = null!;
    }
}