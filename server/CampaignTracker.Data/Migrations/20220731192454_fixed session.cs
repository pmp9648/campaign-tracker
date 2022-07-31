using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CampaignTracker.Data.Migrations
{
    public partial class fixedsession : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PlayerNname",
                table: "Character",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "SessionId",
                table: "Character",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Character_SessionId",
                table: "Character",
                column: "SessionId");

            migrationBuilder.AddForeignKey(
                name: "FK_Character_Session_SessionId",
                table: "Character",
                column: "SessionId",
                principalTable: "Session",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Character_Session_SessionId",
                table: "Character");

            migrationBuilder.DropIndex(
                name: "IX_Character_SessionId",
                table: "Character");

            migrationBuilder.DropColumn(
                name: "PlayerNname",
                table: "Character");

            migrationBuilder.DropColumn(
                name: "SessionId",
                table: "Character");
        }
    }
}
