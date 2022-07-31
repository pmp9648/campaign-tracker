namespace CampaignTracker.Models;

public class Character : EntityBase
{
    public int CampaignId { get; set; }
    public int? EventId { get; set ; }
    public int? SessionId { get; set; }
    public string PlayerName { get; set; }
    public string Firstname { get; set; }
    public string Lastname { get; set; }
    public string Class { get; set; }
    public string Race { get; set; }

    public Campaign Campaign { get; set; }
    public Event Event { get; set; }
    public Session Session { get; set; }
}