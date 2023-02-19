using Microsoft.AspNetCore.Mvc;
using CampaignTracker.Models;
using CampaignTracker.Core.Query;

namespace CampaignTracker.Web.Controllers;
public abstract class EntityController<T> : ControllerBase where T : EntityBase
{
	protected readonly IService<T> svc;

	public EntityController(IService<T> svc)
	{
		this.svc = svc;
	}

	[HttpGet("[action]")]
	public virtual async Task<IActionResult> Query([FromQuery]QueryParams queryParams) =>
		Ok(await svc.QueryAll(queryParams));

	[HttpGet("[action]/{id}")]
	public virtual async Task<IActionResult> GetByIdAsync([FromRoute]int id) =>
		Ok(await svc.Find(id));

	[HttpGet("[action]/")]
	public virtual async Task<IActionResult> GetAllAsync() =>
		Ok(await svc.GetAll());

	[HttpPost("[action]")]
	public virtual async Task<IActionResult> Validate([FromBody]T entity) =>
		Ok(await svc.Validate(entity));

	[HttpPost("[action]")]
	public virtual async Task<IActionResult> Save([FromBody]T entity) {
		return Ok(await svc.Save(entity));
	}

	[HttpDelete("[action]")]
	public virtual async Task<IActionResult> Remove([FromBody]T entity) =>
		Ok(await svc.Remove(entity));
}