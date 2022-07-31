using Microsoft.AspNetCore.Mvc;
using CampaignTracker.Models;
using CampaignTracker.Core.Query;
using CampaignTracker.Services;

namespace CampaignTracker.Web.Controllers;

[Route("api/[controller]")]
public class SessionController : EntityController<Session>
{
    readonly SessionService sessionSvc;

    public SessionController(SessionService svc) : base(svc)
    {
        sessionSvc = svc;
    }

    [HttpGet("[action]{campaignId}")]
    [ProducesResponseType(typeof(QueryResult<Session>), 200)]
    public async Task<IActionResult> QueryByCampaign(
        [FromRoute]int campaignId,
        [FromQuery]QueryParams query
    ) => Ok(await sessionSvc.QueryByCampaign(campaignId, query));
}