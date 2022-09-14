using GroupLite.Models;
using Microsoft.AspNetCore.Mvc;

namespace GroupLite.Handlers
{
    public interface IUnitHandler
    {
        Task<UnitResponse> HandlePostReqeust(UnitRequest unitRequest);
        Task<UnitResponse> HandleGetRequest(string unitCode);
        Task<UnitResponse> HandlePutRequest(UnitRequest unitRequest);
        Task<bool> HandleDeleteRequest(string unitCode);
    }
}