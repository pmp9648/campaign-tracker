namespace CampaignTracker.Models;
public class Session : EntityBase
{
    public int CampaignId { get; set; }
    public string SessionDate { get; set; } // string representations of dates
    public string Title { get; set; }
    public string Url { get; set; }
    public string Summary { get; set; }

    public Campaign Campaign { get; set; }
    public IEnumerable<Event> Events { get; set; }
    public IEnumerable<Character> Characters { get; set; }
}