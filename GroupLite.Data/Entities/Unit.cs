using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace GroupLite.Data.Entities
{
    public class Unit
    {
        [Key]
        [Required]
        public int Id { get; set; }
        [Required]
        [Column(TypeName = "NVARCHAR(100)")]
        public string Name { get; set; } = null!;
        [Required]
        [Column(TypeName = "NVARCHAR(7)")]
        public string Code { get; set; } = null!;
        [Column(TypeName = "date")]
        public DateTime LastUsedAt { get; set; }
        [Required]
        [ForeignKey("Teacher")]
        public int TeacherId { get; set; }
        public virtual Teacher Teacher { get; set; } = null!;
        public virtual ICollection<Student> Students { get; set; } = null!;

        public void CreateUniqueCode()
        {
            Random random = new Random();
            string characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            StringBuilder stringBuilder = new StringBuilder();

            for (int i = 0; i < 7; i++)
            {
                stringBuilder.Append(characters[random.Next(0, characters.Length)]);
            }

            Code = stringBuilder.ToString();
        }
    }
}
