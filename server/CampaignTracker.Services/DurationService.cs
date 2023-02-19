using CampaignTracker.Core.Query;
using CampaignTracker.Models;
using CampaignTracker.Data;

namespace CampaignTracker.Services;

public static class DurationExtensions
{
    public static IQueryable<Duration> Search(this IQueryable<Duration> Duration, string search) => 
        Duration.Where(x => 
            x.SessionEvent.Title.ToLower().Contains(search.ToLower())
            || x.SessionEvent.Notes.ToLower().Contains(search.ToLower())
        );
}

public class DurationService : ServiceBase<Duration>
{
    IQueryable<Duration> Search(IQueryable<Duration> data, string term) =>
        data.Search(term);

    public DurationService(AppDbContext db) : base(db) { }

    public override async Task<QueryResult<Duration>> QueryAll(QueryParams query) => 
        await Query(set, query, Search);

    public async Task<QueryResult<Duration>> QueryByEvent(int eventId, QueryParams query) =>
        await Query(
            set.Where(x => x.SessionEventId == eventId),
            query, Search
        );
    
}
