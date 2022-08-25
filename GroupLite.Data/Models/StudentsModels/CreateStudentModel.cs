using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GroupLite.Data.Models.StudentsModels
{
    public class CreateStudentModel
    {
        [Required]
        public string Name { get; set; } = null!;
        [Required]
        [Range(0, 1)]
        public int Sex { get; set; }
    }
}
