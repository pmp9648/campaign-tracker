using CampaignTracker.Core.Query;
using CampaignTracker.Models;
using CampaignTracker.Data;
using Microsoft.EntityFrameworkCore;

namespace CampaignTracker.Services;

public class EventTypeService : ServiceBase<EventType>
{

    public EventTypeService(AppDbContext db) : base(db) { }
}