using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GroupLite.Data.Entities
{
    public class Teacher
    {
        [Key]
        [Required]
        public int Id { get; set; }
        [Required]
        [EmailAddress]
        [Column(TypeName = "NVARCHAR(100)")]
        public string EmailAddress { get; set; } = null!;
        [Column(TypeName = "date")]
        public DateTime LastUsedAt { get; set; }
        public virtual ICollection<Unit> Units { get; set; } = null!;

    }
}
