using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CampaignTracker.Data.Migrations
{
    public partial class fixedcharacter : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Character_Event_EventId",
                table: "Character");

            migrationBuilder.AlterColumn<int>(
                name: "EventId",
                table: "Character",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "CampaignId",
                table: "Character",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Character_CampaignId",
                table: "Character",
                column: "CampaignId");

            migrationBuilder.AddForeignKey(
                name: "FK_Character_Campaign_CampaignId",
                table: "Character",
                column: "CampaignId",
                principalTable: "Campaign",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Character_Event_EventId",
                table: "Character",
                column: "EventId",
                principalTable: "Event",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Character_Campaign_CampaignId",
                table: "Character");

            migrationBuilder.DropForeignKey(
                name: "FK_Character_Event_EventId",
                table: "Character");

            migrationBuilder.DropIndex(
                name: "IX_Character_CampaignId",
                table: "Character");

            migrationBuilder.DropColumn(
                name: "CampaignId",
                table: "Character");

            migrationBuilder.AlterColumn<int>(
                name: "EventId",
                table: "Character",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Character_Event_EventId",
                table: "Character",
                column: "EventId",
                principalTable: "Event",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
