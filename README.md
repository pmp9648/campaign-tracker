# campaign-tracker

Idea to design game tracking engine to allow a Game Manager (GM) to track the time throughout a campaign.  This will involve the ability to track month, day, hour, minute.

```cs
public class Campaign 
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public DateTime CampaignStart { get; set; }
    public DateTime CampaignEnd { get; set; }
}
```

```cs
public class Session
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Url { get; set; }
    public string Notes { get; set; }
}
```

```cs
public class Milestone
{
    public int Id { get; set; }
    
}
```

```cs
public class TimeTracker 
{
    public int Id { get; set; }
}
```