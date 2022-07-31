using CampaignTracker.Core.Query;
using CampaignTracker.Models;
using CampaignTracker.Data;

namespace CampaignTracker.Services;

public static class CharacterExtensions
{
    public static IQueryable<Character> Search(this IQueryable<Character> Character, string search) => 
        Character.Where(x => 
            x.Lastname.ToLower().Contains(search.ToLower())
            || x.Firstname.ToLower().Contains(search.ToLower())
            || x.Race.ToLower().Contains(search.ToLower())
            || x.Class.ToLower().Contains(search.ToLower())
        );
}

public class CharacterService : ServiceBase<Character>
{
    IQueryable<Character> Search(IQueryable<Character> data, string term) =>
        data.Search(term);

    public CharacterService(AppDbContext db) : base(db) { }

    public override async Task<QueryResult<Character>> QueryAll(QueryParams query) => 
        await Query(set, query, Search);

    public async Task<QueryResult<Character>> QueryByCampaign(int campaignId, QueryParams query) =>
        await Query(
            set.Where(x => x.CampaignId == campaignId),
            query, Search
        );
}
