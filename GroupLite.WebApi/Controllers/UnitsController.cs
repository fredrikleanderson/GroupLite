using GroupLite.Handlers;
using GroupLite.Models;
using Microsoft.AspNetCore.Mvc;

namespace GroupLite.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UnitsController : ControllerBase
    {
        private readonly IUnitHandler _unitHandler;

        public UnitsController(IUnitHandler unitHandler)
        {
            _unitHandler = unitHandler;
        }

        [HttpPost]
        public async Task<ActionResult<UnitResponse>> Post(UnitRequest unitRequest)
        {
            UnitResponse? response = await _unitHandler.HandlePostReqeust(unitRequest);
            return response == null ? BadRequest() : Ok(response); 
        }

        [HttpGet("{unitCode}")]
        public async Task<IActionResult> Get(string unitCode)
        {
            UnitResponse? response = await _unitHandler.HandleGetRequest(unitCode);
            return response == null ? NotFound("Felaktigt angiven klasskod.") : Ok(response);
        }

        [HttpPut]
        public async Task<IActionResult> Put(UnitRequest unitRequest)
        {
            UnitResponse? response = await _unitHandler.HandlePutRequest(unitRequest);
            return response == null ? BadRequest() : Ok(response);
        }

        [HttpDelete("{unitCode}")]
        public async Task<IActionResult> Delete(string unitCode)
        {
            bool isSuccessful = await _unitHandler.HandleDeleteRequest(unitCode);
            return isSuccessful == false ? NotFound() : Ok();
        }
    }
}
