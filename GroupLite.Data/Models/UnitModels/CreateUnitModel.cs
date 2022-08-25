using GroupLite.Data.Models.StudentsModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GroupLite.Data.Models.UnitModels
{
    public class CreateUnitModel
    {
        public string TeacherEmailAddress { get; set; } = null!;
        public string Name { get; set; } = null!;
        public IEnumerable<CreateStudentModel> Students { get; set; } = null!;
    }
}
