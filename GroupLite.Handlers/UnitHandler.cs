using AutoMapper;
using GroupLite.Data;
using GroupLite.Entities;
using GroupLite.Models;
using Microsoft.AspNetCore.Mvc;

namespace GroupLite.Handlers
{
    public class UnitHandler : IUnitHandler
    {
        private readonly IMapper _mapper;
        private readonly IDataService _dataService;

        public UnitHandler(IMapper mapper, IDataService dataService)
        {
            _mapper = mapper;
            _dataService = dataService;
        }

        public async Task<UnitResponse> HandlePostReqeust(UnitRequest unitRequest)
        {
            return _mapper.Map<UnitResponse>(await _dataService.CreateUnit(_mapper.Map<Unit>(unitRequest)));
        }

        public async Task<UnitResponse> HandleGetRequest(string unitCode)
        {
            return _mapper.Map<UnitResponse>(await _dataService.ReadUnit(unitCode));
        }

        public Task<UnitResponse> HandlePutRequest(UnitRequest unitRequest)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> HandleDeleteRequest(string unitCode)
        {
            return await _dataService.DeleteUnit(unitCode);
        }
    }
}