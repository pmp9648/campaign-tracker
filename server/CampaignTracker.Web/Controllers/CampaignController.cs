using Microsoft.AspNetCore.Mvc;
using CampaignTracker.Models;
using CampaignTracker.Core.Query;
using CampaignTracker.Services;

namespace CampaignTracker.Web.Controllers;

[Route("api/[controller]")]
public class CampaignController : EntityController<Campaign>
{
    readonly CampaignService campaignSvc;

    public CampaignController(CampaignService svc) : base(svc)
    {
        campaignSvc = svc;
    }

    [HttpGet("[action]/{isComplete}")]
    [ProducesResponseType(typeof(QueryResult<Campaign>), 200)]
    public async Task<IActionResult> QueryByComplete(
        [FromRoute]bool isComplete,
        [FromQuery]QueryParams query
    ) => Ok(await campaignSvc.QueryByComplete(isComplete, query));
}