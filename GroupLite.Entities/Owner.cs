namespace GroupLite.Entities;

public class Owner : Person
{
    public string Email { get; set; } = null!;
    public virtual ICollection<Unit> Units { get; set; } = null!;
}
