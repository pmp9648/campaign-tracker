namespace CampaignTracker.Models;

public class Duration : EntityBase
{
    public int EventId { get; set; }
    public int Minutes { get; set; }

    public Event Event { get; set; }
}