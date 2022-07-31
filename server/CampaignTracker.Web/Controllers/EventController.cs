using Microsoft.AspNetCore.Mvc;
using CampaignTracker.Models;
using CampaignTracker.Core.Query;
using CampaignTracker.Services;

namespace CampaignTracker.Web.Controllers;

[Route("api/[controller]")]
public class EventController : EntityController<Event>
{
    readonly EventService eventSvc;

    public EventController(EventService svc) : base(svc)
    {
        eventSvc = svc;
    }

    [HttpGet("[action]/{sessionId}")]
    [ProducesResponseType(typeof(QueryResult<Event>), 200)]
    public async Task<IActionResult> QueryBySession(
        [FromRoute]int sessionId,
        [FromQuery]QueryParams query
    ) => Ok(await eventSvc.QueryBySession(sessionId, query));
}