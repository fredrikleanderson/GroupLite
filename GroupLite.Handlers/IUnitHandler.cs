using GroupLite.Models;
using Microsoft.AspNetCore.Mvc;

namespace GroupLite.Handlers
{
    public interface IUnitHandler
    {
        Task<UnitResponse> HandlePostReqeust(UnitRequest request);
        Task<UnitResponse> HandleGetRequest(string unitCode);
        Task<UnitResponse?> HandlePutRequest(UnitRequest request);
        Task<bool> HandleDeleteRequest(string unitCode);
    }
}