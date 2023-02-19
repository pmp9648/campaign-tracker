namespace CampaignTracker.Models;

public class SessionEvent : EntityBase
{
    public int Index { get; set; }
    public int SessionId { get; set;}
    public int EventTypeId { get; set; }
    public int TotalDuration { get; set; }
    public string Title { get; set; }
    public string Notes { get; set; }

    public Session Session { get; set; }
    public EventType EventType { get; set; }
    public IEnumerable<Character> Characters { get; set; }
    public IEnumerable<Duration> Durations { get; set; }
}