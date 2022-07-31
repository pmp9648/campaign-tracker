using CampaignTracker.Core.Query;
using CampaignTracker.Models;
using CampaignTracker.Data;
using Microsoft.EntityFrameworkCore;

namespace CampaignTracker.Services;

public static class EventExtensions
{
    public static IQueryable<Event> Search(this IQueryable<Event> Event, string search) => 
        Event.Where(x => 
            x.Title.ToLower().Contains(search.ToLower())
            || x.EventType.Type.ToLower().Contains(search.ToLower())
        );
}

public class EventService : ServiceBase<Event>
{
    IQueryable<Event> Search(IQueryable<Event> data, string term) =>
        data.Search(term);

    public EventService(AppDbContext db) : base(db) { }

    public override async Task<QueryResult<Event>> QueryAll(QueryParams query) => 
        await Query(set, query, Search);

    public async Task<QueryResult<Event>> QueryBySession(int sessionId, QueryParams query) =>
        await Query(
            set.Where(x => x.SessionId == sessionId),
            query, Search
        );

    public async Task<QueryResult<Event>> QueryByType(string Value, QueryParams query) =>
        await Query(
            set.Where(x => x.EventType.Type.ToLower().Contains(Value.ToLower())),
            query, Search
        );

    public override async Task Seed()
	{
        await db.EventTypes.AddRangeAsync(new List<EventType>
        {
            new EventType { Type = "Combat" },
            new EventType { Type = "Long Rest"},
            new EventType { Type = "Short Rest"},
            new EventType { Type = "Role Playing"}
        });
        await db.SaveChangesAsync();

        var eventName = await db.EventTypes.Where(x => x.Type.Contains("Role Playing")).FirstOrDefaultAsync();

        for(int i = 1; i <= 3; i++)
        {
            var session = await db.Sessions.Where(x => x.Title.Contains($"Session {i}")).FirstOrDefaultAsync();
		    await db.Events.AddRangeAsync(new List<Event>
		    {
			    new Event { Title = $"Event {i}", Index = i, SessionId = session.Id, EventTypeId = eventName.Id }
		    });
        }

		await db.SaveChangesAsync();

	}

    
}
