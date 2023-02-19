using Microsoft.AspNetCore.Mvc;
using CampaignTracker.Models;
using CampaignTracker.Core.Query;
using CampaignTracker.Services;

namespace CampaignTracker.Web.Controllers;

[Route("api/[controller]")]
public class EventTypeController : EntityController<EventType>
{
    readonly EventTypeService eventTypeSvc;

    public EventTypeController(EventTypeService svc) : base(svc)
    {
        eventTypeSvc = svc;
    }
}