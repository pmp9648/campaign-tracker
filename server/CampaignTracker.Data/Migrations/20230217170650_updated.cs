using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CampaignTracker.Data.Migrations
{
    public partial class updated : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Character_Event_EventId",
                table: "Character");

            migrationBuilder.DropForeignKey(
                name: "FK_Duration_Event_EventId",
                table: "Duration");

            migrationBuilder.DropTable(
                name: "Event");

            migrationBuilder.RenameColumn(
                name: "EventId",
                table: "Duration",
                newName: "SessionEventId");

            migrationBuilder.RenameIndex(
                name: "IX_Duration_EventId",
                table: "Duration",
                newName: "IX_Duration_SessionEventId");

            migrationBuilder.RenameColumn(
                name: "EventId",
                table: "Character",
                newName: "SessionEventId");

            migrationBuilder.RenameIndex(
                name: "IX_Character_EventId",
                table: "Character",
                newName: "IX_Character_SessionEventId");

            migrationBuilder.CreateTable(
                name: "SessionEvent",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Index = table.Column<int>(type: "int", nullable: false),
                    SessionId = table.Column<int>(type: "int", nullable: false),
                    EventTypeId = table.Column<int>(type: "int", nullable: false),
                    TotalDuration = table.Column<int>(type: "int", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Notes = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SessionEvent", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SessionEvent_EventType_EventTypeId",
                        column: x => x.EventTypeId,
                        principalTable: "EventType",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SessionEvent_Session_SessionId",
                        column: x => x.SessionId,
                        principalTable: "Session",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SessionEvent_EventTypeId",
                table: "SessionEvent",
                column: "EventTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_SessionEvent_SessionId",
                table: "SessionEvent",
                column: "SessionId");

            migrationBuilder.AddForeignKey(
                name: "FK_Character_SessionEvent_SessionEventId",
                table: "Character",
                column: "SessionEventId",
                principalTable: "SessionEvent",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Duration_SessionEvent_SessionEventId",
                table: "Duration",
                column: "SessionEventId",
                principalTable: "SessionEvent",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Character_SessionEvent_SessionEventId",
                table: "Character");

            migrationBuilder.DropForeignKey(
                name: "FK_Duration_SessionEvent_SessionEventId",
                table: "Duration");

            migrationBuilder.DropTable(
                name: "SessionEvent");

            migrationBuilder.RenameColumn(
                name: "SessionEventId",
                table: "Duration",
                newName: "EventId");

            migrationBuilder.RenameIndex(
                name: "IX_Duration_SessionEventId",
                table: "Duration",
                newName: "IX_Duration_EventId");

            migrationBuilder.RenameColumn(
                name: "SessionEventId",
                table: "Character",
                newName: "EventId");

            migrationBuilder.RenameIndex(
                name: "IX_Character_SessionEventId",
                table: "Character",
                newName: "IX_Character_EventId");

            migrationBuilder.CreateTable(
                name: "Event",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EventTypeId = table.Column<int>(type: "int", nullable: false),
                    SessionId = table.Column<int>(type: "int", nullable: false),
                    Index = table.Column<int>(type: "int", nullable: false),
                    Notes = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TotalDuration = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Event", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Event_EventType_EventTypeId",
                        column: x => x.EventTypeId,
                        principalTable: "EventType",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Event_Session_SessionId",
                        column: x => x.SessionId,
                        principalTable: "Session",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Event_EventTypeId",
                table: "Event",
                column: "EventTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Event_SessionId",
                table: "Event",
                column: "SessionId");

            migrationBuilder.AddForeignKey(
                name: "FK_Character_Event_EventId",
                table: "Character",
                column: "EventId",
                principalTable: "Event",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Duration_Event_EventId",
                table: "Duration",
                column: "EventId",
                principalTable: "Event",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
