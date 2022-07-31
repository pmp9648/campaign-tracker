namespace CampaignTracker.Models;

public class Campaign : EntityBase 
{
    public string Name { get; set; }
    public string Description { get; set; }
    public string CampaignStart { get; set; } // string representations of dates
    public string CampaignEnd { get; set; } // string representations of dates
    public string Current { get; set; } //string representation of current date 
    public bool isComplete { get; set; }

    public IEnumerable<Session> Sessions { get; set ;}
    public IEnumerable<Character> Characters { get; set; }
}