using CampaignTracker.Core.Banner;
using Microsoft.AspNetCore.Mvc;

namespace CampaignTracker.Web.Controllers;

[Route("api/[controller]")]
public class BannerController : Controller
{
    readonly BannerConfig config;

    public BannerController(BannerConfig config) => this.config = config;

    [HttpGet("[action]")]
    public BannerConfig GetConfig() => config;
}