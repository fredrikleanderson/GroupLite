using GroupLite.Entities;

namespace GroupLite.Models
{
    public class UnitResponse
    {
        public int Id { get; set; }
        public string Code { get; set; } = null!;
        public OwnerResponse Owner { get; set; } = null!;
        public ICollection<MemberResponse> Members { get; set; } = null!;
    }
}