using Microsoft.AspNetCore.Mvc;
using CampaignTracker.Models;
using CampaignTracker.Core.Query;
using CampaignTracker.Services;

namespace CampaignTracker.Web.Controllers;

[Route("api/[controller]")]
public class SessionEventController : EntityController<SessionEvent>
{
    readonly SessionEventService eventSvc;

    public SessionEventController(SessionEventService svc) : base(svc)
    {
        eventSvc = svc;
    }

    [HttpGet("[action]/{sessionId}")]
    [ProducesResponseType(typeof(QueryResult<SessionEvent>), 200)]
    public async Task<IActionResult> QueryBySession(
        [FromRoute]int sessionId,
        [FromQuery]QueryParams query
    ) => Ok(await eventSvc.QueryBySession(sessionId, query));
}