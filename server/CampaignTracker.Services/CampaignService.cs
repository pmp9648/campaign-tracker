using CampaignTracker.Core.Query;
using CampaignTracker.Models;
using CampaignTracker.Data;

namespace CampaignTracker.Services;

public static class CampaignExtensions
{
	public static IQueryable<Campaign> Search(this IQueryable<Campaign> campaign, string search) =>
		campaign.Where(x =>
			x.Name.ToLower().Contains(search.ToLower())
			|| x.Description.ToLower().Contains(search.ToLower())
		);
}

public class CampaignService : ServiceBase<Campaign>
{
	IQueryable<Campaign> Search(IQueryable<Campaign> data, string term) =>
		data.Search(term);

	public CampaignService(AppDbContext db) : base(db) { }

	public override async Task<QueryResult<Campaign>> QueryAll(QueryParams query) =>
		await Query(set, query, Search);

	public async Task<QueryResult<Campaign>> QueryByComplete(bool isComplete, QueryParams query) =>
		await Query(
			set.Where(x => x.isComplete == isComplete),
			query, Search
		);

	public override async Task Seed()
	{
		await db.Campaigns.AddRangeAsync(new List<Campaign>
		{
			new Campaign { Name = "Onyx Dawn",  CampaignStart = "12/25/2020", CampaignEnd = "12/25/2022", isComplete = false, Current = "Yes",
                
                Characters = new List<Character>
                {
                    new Character
                        {
                            Firstname = "Gandolf",
                            Lastname = "The Grey",
                            Race = "Human",
                            Class = "Wizard"
                        },
                    new Character
                    {
                        Firstname = "Frodo",
                        Lastname = "Baggins",
                        Class = "Fighter",
                        Race = "Halfling"
                    },
                     new Character
                    {
                        Firstname = "Aragon",
                        Lastname = "Stryder",
                        Class = "Fighter",
                        Race = "Human"
                    },
                     new Character
                    {
                        Firstname = "Legalis",
                        Lastname = "The Elf",
                        Class = "Ranger",
                        Race = "Elf"
                    },
                     new Character
                    {
                        Firstname = "Geimly",
                        Lastname = "The Barb",
                        Class = "Barbarian",
                        Race = "Dwarf"
                    }
                }
            }
		});

		await db.SaveChangesAsync();
	}

	public override Task SeedTest() => Seed();

}


