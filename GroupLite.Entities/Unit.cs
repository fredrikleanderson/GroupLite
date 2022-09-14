namespace GroupLite.Entities;

public class Unit
{
    public int Id { get; set; }
    public string Code { get; set; } = string.Empty;
    public int OwnerId { get; set; }
    public virtual Owner Owner { get; set; } = null!;
    public virtual ICollection<Member> Members { get; set; } = null!;
}