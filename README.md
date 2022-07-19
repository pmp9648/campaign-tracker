# campaign-tracker

Idea to design game tracking engine to allow a Game Manager (GM) to track the time throughout a campaign.  This will involve the ability to track month, day, hour, minute.

## Features

- The ability to add time duration of each session, maybe even each event within a session
- The ability to quick add long rest (8 hours)
- the ability to quick add short rest (4 hours)
- the ability to quick mark 10 min increments and add a notes


```cs
public class Campaign 
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string CampaignStart { get; set; } // string representations of dates
    public string CampaignEnd { get; set; } // string representations of dates
    public string Current { get; set; } //string representation of current date 
    public bool isComplete { get; set }

    public IEnumberable<Session> Sessions { get; set ;}
}
```

```cs
public class Session
{
    public int Id { get; set; }
    public int CampaignId { get; set; }
    public string SessionDate { get; set; }
    public string Title { get; set; }
    public string Url { get; set; }
    public string Summary { get; set; }

    public Campaign Campaign { get; set; }
    public IEnumberable<Event> Events { get; set; }
}
```

```cs
public class Event
{
    public int Id { get; set; }
    public int Index { get; set; }
    public int SessionId { get; set;}
    public int EventTypeId { get; set; }
    public int TotalDuration { get; set; }
    public string Title { get; set; }
    public string Notes { get; set; }

    public Session Session { get; set; }
    public EventType Type { get; set; }
    public IEnumerable<Character> Characters { get; set; }
    public IENumberable<Duration> Durations { get; set; }
}
```

```cs
public class Character
{
    public int Id { get; set; }
    public int EventId { get; set; }
    public string Firstname { get; set; }
    public string Lastname { get; set; }
    public string Class { get; set; }
    public string Race { get; set; }

    public Event Event { get; set; }
}
```

```cs
public class Duration 
{
    public int Id { get; set; }
    public int EventId { get; set; }
    public int Minutes { get; set; }
}
```