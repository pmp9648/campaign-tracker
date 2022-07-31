using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CampaignTracker.Data.Migrations
{
    public partial class fixedsessionagain : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PlayerNname",
                table: "Character",
                newName: "PlayerName");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PlayerName",
                table: "Character",
                newName: "PlayerNname");
        }
    }
}
