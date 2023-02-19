using CampaignTracker.Core.Query;

namespace CampaignTracker.Models;
public interface IService<T> where T : EntityBase
{
	Task<QueryResult<T>> QueryAll(QueryParams queryParams);
	Task<T> Find(int id);
	Task<List<T>> GetAll();
	Task<bool> Validate(T entity);
	Task<T> Save(T entity);
	Task<bool> Remove(T entity);
	Task Seed();
	Task SeedTest();
}