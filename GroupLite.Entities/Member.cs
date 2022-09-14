namespace GroupLite.Entities;

public class Member : Person
{
    public int UnitId { get; set; }
    public virtual Unit Unit { get; set; } = null!;
}
