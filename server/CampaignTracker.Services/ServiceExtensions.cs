using Microsoft.Extensions.DependencyInjection;

namespace CampaignTracker.Services;
public static class ServiceExtensions
{
	public static void AddAppServices(this IServiceCollection services)
	{
		
		services.AddScoped<CampaignService>();
		services.AddScoped<CharacterService>();
		services.AddScoped<SessionEventService>();
		services.AddScoped<EventTypeService>();
		services.AddScoped<SessionService>();
	}
}