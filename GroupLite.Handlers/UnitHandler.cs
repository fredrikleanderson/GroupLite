using AutoMapper;
using GroupLite.Data;
using GroupLite.Entities;
using GroupLite.Models;
using GroupLite.Utilities;
using Microsoft.AspNetCore.Mvc;

namespace GroupLite.Handlers
{
    public class UnitHandler : IUnitHandler
    {
        private readonly IMapper _mapper;
        private readonly IDataService _dataService;
        private readonly IValidatorService _valdiatorService;

        public UnitHandler(IMapper mapper, IDataService dataService, IValidatorService validatorService)
        {
            _mapper = mapper;
            _dataService = dataService;
            _valdiatorService = validatorService;
        }

        public async Task<UnitResponse?> HandlePostReqeust(UnitRequest request)
        {
            if (await _valdiatorService.EmailIsValid(request.Owner.Email))
            {
                return _mapper.Map<UnitResponse>(await _dataService.CreateUnit(_mapper.Map<Unit>(request)));
            }

            return null;
        }

        public async Task<UnitResponse> HandleGetRequest(string unitCode)
        {
            return _mapper.Map<UnitResponse>(await _dataService.ReadUnit(unitCode));
        }

        public async Task<UnitResponse?> HandlePutRequest(UnitRequest request)
        {
            return _mapper.Map<UnitResponse>(await _dataService.UpdateUnit(_mapper.Map<Unit>(request)));
        }

        public async Task<bool> HandleDeleteRequest(string unitCode)
        {
            return await _dataService.DeleteUnit(unitCode);
        }
    }
}