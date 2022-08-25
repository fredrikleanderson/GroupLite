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
        public virtual ICollection<Student> Students { get; set; } = null!;
    }
}
