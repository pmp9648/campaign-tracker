namespace CampaignTracker.Models;

public class EventType : EntityBase 
{
    public string Type { get; set; }
    public string Description { get; set; }

    public IEnumerable<SessionEvent> SessionEvents { get; set; }
}