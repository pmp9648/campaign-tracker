using CampaignTracker.Core.Query;
using CampaignTracker.Models;
using CampaignTracker.Data;

namespace CampaignTracker.Services;

public static class SessionExtensions
{
    public static IQueryable<Session> Search(this IQueryable<Session> Session, string search) => 
        Session.Where(x => 
            x.Title.ToLower().Contains(search.ToLower())
            || x.Summary.ToLower().Contains(search.ToLower())
        );
}

public class SessionService : ServiceBase<Session>
{
    IQueryable<Session> Search(IQueryable<Session> data, string term) =>
        data.Search(term);

    public SessionService(AppDbContext db) : base(db) { }

    public override async Task<QueryResult<Session>> QueryAll(QueryParams query) => 
        await Query(set, query, Search);

    public async Task<QueryResult<Session>> QueryByCampaign(int campaignId, QueryParams query) =>
        await Query(
            set.Where(x => x.CampaignId == campaignId),
            query, Search
        );
    public override async Task Seed()
	{

        var campaignId = db.Campaigns.Select(x => x.Id).FirstOrDefault();
		await db.Sessions.AddRangeAsync(new List<Session>
		{
            new Session 
            {
                 Title = "Session 1",
                 SessionDate = "12/25/2020",
                 CampaignId = campaignId
            },
             new Session 
            {
                 Title = "Session 2",
                 SessionDate = "02/25/2021",
                 CampaignId = campaignId
            },
             new Session 
            {
                 Title = "Session 3",
                 SessionDate = "03/25/2021",
                 CampaignId = campaignId
            }, 
            new Session 
            {
                 Title = "Session 4",
                 SessionDate = "04/25/2021",
                 CampaignId = campaignId
            }
        });
        await db.SaveChangesAsync();
    }
}

