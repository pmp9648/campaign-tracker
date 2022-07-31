using Microsoft.AspNetCore.Mvc;
using CampaignTracker.Models;
using CampaignTracker.Core.Query;
using CampaignTracker.Services;

namespace CampaignTracker.Web.Controllers;

[Route("api/[controller]")]
public class CharacterController : EntityController<Character>
{
    readonly CharacterService characterSvc;

    public CharacterController(CharacterService svc) : base(svc)
    {
        characterSvc = svc;
    }

    [HttpGet("[action]/{campaignId}")]
    [ProducesResponseType(typeof(QueryResult<Character>), 200)]
    public async Task<IActionResult> QueryByCampaign(
        [FromRoute]int campaignId,
        [FromQuery]QueryParams query
    ) => Ok(await characterSvc.QueryByCampaign(campaignId, query));
}