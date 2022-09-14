using GroupLite.Entities;

namespace GroupLite.Data
{
    public interface IDataService
    {
        Task<Unit> CreateUnit(Unit unit);
        Task<Unit?> ReadUnit(string code);
        Task<Unit?> UpdateUnit(Unit unit);
        Task<bool> DeleteUnit(string code);
    }
}
