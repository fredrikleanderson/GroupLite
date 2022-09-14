using GroupLite.Entities;
using Microsoft.EntityFrameworkCore;

namespace GroupLite.Data
{
    public class DataContext: DbContext
    {
        public virtual DbSet<Owner> Owners { get; set; } = null!;
        public virtual DbSet<Unit> Units { get; set; } = null!;
        public virtual DbSet<Member> Members { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Unit>().Property(x => x.Code).HasMaxLength(7).IsRequired();
            modelBuilder.Entity<Unit>().HasIndex(x => x.Code).IsUnique();

            modelBuilder.Entity<Owner>().HasIndex(x => x.Email).IsUnique();
            modelBuilder.Entity<Owner>().Property(x => x.Email).HasMaxLength(100).IsRequired();
            modelBuilder.Entity<Owner>().Property(x => x.FirstName).HasMaxLength(50).IsRequired();
            modelBuilder.Entity<Owner>().Property(x => x.LastName).HasMaxLength(50).IsRequired();

            modelBuilder.Entity<Member>().Property(x => x.FirstName).HasMaxLength(50).IsRequired();
            modelBuilder.Entity<Member>().Property(x => x.LastName).HasMaxLength(50).IsRequired();
        }

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
    }
}