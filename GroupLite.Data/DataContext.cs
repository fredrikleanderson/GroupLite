using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GroupLite.Data.Entities;

namespace GroupLite.Data
{
    public class DataContext: DbContext
    {
        public virtual DbSet<Teacher> Teachers { get; set; } = null!;
        public virtual DbSet<Student> Students { get; set; } = null!;
        public virtual DbSet<Unit> Units { get; set; } = null!;

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
    }
}
