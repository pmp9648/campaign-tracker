using CampaignTracker.Core.Query;
using CampaignTracker.Models;
using CampaignTracker.Data;
using Microsoft.EntityFrameworkCore;

namespace CampaignTracker.Services;

public static class SessionEventExtensions
{
    public static IQueryable<SessionEvent> Search(this IQueryable<SessionEvent> SessionEvent, string search) => 
        SessionEvent.Where(x => 
            x.Title.ToLower().Contains(search.ToLower())
            || x.EventType.Type.ToLower().Contains(search.ToLower())
        );
}

public class SessionEventService : ServiceBase<SessionEvent>
{
    IQueryable<SessionEvent> Search(IQueryable<SessionEvent> data, string term) =>
        data.Search(term);

    public SessionEventService(AppDbContext db) : base(db) { }

    public override async Task<QueryResult<SessionEvent>> QueryAll(QueryParams query) => 
        await Query(set, query, Search);

    public async Task<QueryResult<SessionEvent>> QueryBySession(int sessionId, QueryParams query) =>
        await Query(
            set.Where(x => x.SessionId == sessionId),
            query, Search
        );

    public async Task<QueryResult<SessionEvent>> QueryByType(string Value, QueryParams query) =>
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
		    await db.SessionEvents.AddRangeAsync(new List<SessionEvent>
		    {
			    new SessionEvent { Title = $"SessionEvent {i}", Index = i, SessionId = session.Id, EventTypeId = eventName.Id }
		    });
        }

		await db.SaveChangesAsync();

	}

    
}
