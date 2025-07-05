using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AssessmentGPMAMVC.Migrations
{
    /// <inheritdoc />
    public partial class chooses : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "OurAnswer",
                table: "UserAnswers");

            migrationBuilder.AddColumn<string>(
                name: "Choose",
                table: "Questions",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "CorrectAnswer",
                table: "Questions",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Chooses",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "CorrectAnswer",
                table: "Questions");

            migrationBuilder.AddColumn<int>(
                name: "OurAnswer",
                table: "UserAnswers",
                type: "int",
                nullable: true);
        }
    }
}
