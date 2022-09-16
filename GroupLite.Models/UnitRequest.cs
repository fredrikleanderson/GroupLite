using GroupLite.Entities;

namespace GroupLite.Models
{
    public class UnitRequest
    {
        public int? Id { get; set; }
        public string? Code { get; set; } = null!;
        public OwnerRequest Owner { get; set; } = null!;
        public ICollection<MemberRequest> Members { get; set; } = null!;
    }
}