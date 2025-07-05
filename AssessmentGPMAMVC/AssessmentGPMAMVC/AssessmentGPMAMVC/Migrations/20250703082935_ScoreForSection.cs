using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AssessmentGPMAMVC.Migrations
{
    /// <inheritdoc />
    public partial class ScoreForSection : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ScoreForSection",
                table: "TestAttempts",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ScoreForSection",
                table: "TestAttempts");
        }
    }
}
