namespace CampaignTracker.Models;

public class Duration : EntityBase
{
    public int SessionEventId { get; set; }
    public int Minutes { get; set; }

    public SessionEvent SessionEvent { get; set; }
}