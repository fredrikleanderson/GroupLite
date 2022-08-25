using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace GroupLite.Data.Entities
{
    public class Student
    {
        [Key]
        [Required]
        public int Id { get; set; }
        [Required]
        [Column(TypeName = "NVARCHAR(100)")]
        public string Name { get; set; } = null!;
        [Required]
        [Range(0, 1)]
        public int Sex { get; set; }
        [Required]
        [ForeignKey("Unit")]
        public int UnitId { get; set; }
        public virtual Unit Unit { get; set; } = null!;
    }
}
