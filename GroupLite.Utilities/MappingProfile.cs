using AutoMapper;
using GroupLite.Entities;
using GroupLite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GroupLite.Utilities
{
    public class MappingProfile: Profile
    {
        public MappingProfile()
        {
            CreateMap<UnitRequest, Unit>();
            CreateMap<Unit, UnitResponse>();
            CreateMap<OwnerRequest, Owner>();
            CreateMap<Owner, OwnerResponse>();
            CreateMap<MemberRequest, Member>();
            CreateMap<Member, MemberResponse>();
        }
    }
}
