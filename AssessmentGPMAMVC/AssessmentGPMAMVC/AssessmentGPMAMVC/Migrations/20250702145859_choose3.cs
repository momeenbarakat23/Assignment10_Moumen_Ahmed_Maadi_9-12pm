using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AssessmentGPMAMVC.Migrations
{
    /// <inheritdoc />
    public partial class choose3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Choose",
                table: "Questions",
                newName: "Explanation");

            migrationBuilder.AddColumn<string>(
                name: "ChoiceA",
                table: "Questions",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ChoiceB",
                table: "Questions",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ChoiceC",
                table: "Questions",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ChoiceD",
                table: "Questions",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ChoiceA",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "ChoiceB",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "ChoiceC",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "ChoiceD",
                table: "Questions");

            migrationBuilder.RenameColumn(
                name: "Explanation",
                table: "Questions",
                newName: "Choose");
        }
    }
}
