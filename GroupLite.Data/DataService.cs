using GroupLite.Entities;
using GroupLite.Utilities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GroupLite.Data
{
    public class DataService : IDataService
    {
        private readonly DataContext _context;
        private readonly ICodeService _codeService;

        public DataService(DataContext context, ICodeService codeService)
        {
            _context = context;
            _codeService = codeService;
        }

        public async Task<Unit> CreateUnit(Unit unit)
        {
            do
            {
                unit.Code = _codeService.GenerateCode();
            } while (await _context.Units.AnyAsync(x => x.Code == unit.Code));

            await _context.AddAsync(await CheckForExistingOwner(unit));
            await _context.SaveChangesAsync();
            return unit;
        }

        public async Task<Unit?> ReadUnit(string code)
        {
            return await _context.Units.Include(x => x.Owner).Include(x => x.Members).FirstOrDefaultAsync(x => x.Code == code);
        }

        public async Task<Unit?> UpdateUnit(Unit unit)
        {
            _context.Update(unit);
            await _context.SaveChangesAsync();
            return unit;
        }

        public async Task<bool> DeleteUnit(string unitCode)
        {
            Unit? unit = await _context.Units.Include(x => x.Owner).FirstOrDefaultAsync(x => x.Code == unitCode);

            if (unit != null)
            {
                _context.Remove(unit);
                await _context.SaveChangesAsync();
                await DeleteOwnersWithNoUnits(unit.Owner);
                return true;
            }

            return false;
        }

        private async Task<Unit> CheckForExistingOwner(Unit unit)
        {
            Owner? owner = await _context.Owners.FirstOrDefaultAsync(x => x.Email == unit.Owner.Email);

            if (owner != null)
            {
                unit.Owner = owner;
            }

            return unit;
        }

        private async Task DeleteOwnersWithNoUnits(Owner owner)
        {
            if(!await _context.Units.AnyAsync(x => x.OwnerId == owner.Id))
            {
                _context.Remove(owner);
                await _context.SaveChangesAsync();
            }
        }
    }
}
