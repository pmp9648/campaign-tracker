using CampaignTracker.DbCli;
using CampaignTracker.Services;

try
{
	string env = args.Length > 0
				? args[0]
				: "Dev";

	bool destroy = args.Length > 1
		&& bool.Parse(args[1]);

	using DbManager manager = new (env, destroy);
	await manager.InitializeAsync();

	Console.WriteLine("Seeding Campaign...");
	CampaignService campaignSvc = new(manager.Context);
	await campaignSvc.Seed();

	Console.WriteLine("Seeding Session...");
	SessionService sessionSvc = new(manager.Context);
	await sessionSvc.Seed();

	Console.WriteLine("Seeding Events...");
	EventService eventSvc = new(manager.Context);
	await eventSvc.Seed();

	Console.WriteLine("Database seeding completed successfully");
}
catch (Exception ex)
{
	throw new Exception("An error occurred while seeding the database", ex);
}