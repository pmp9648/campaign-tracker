namespace CampaignTracker.Models;

public class EventType : EntityBase 
{
    public string Type { get; set; }
    public string Description { get; set; }

    public IEnumerable<Event> Events { get; set; }
}