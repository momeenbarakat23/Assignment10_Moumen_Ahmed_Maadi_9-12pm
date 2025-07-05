using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AssessmentGPMAMVC.Migrations
{
    /// <inheritdoc />
    public partial class removerelash : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TestAttempts_Sections_SectionId",
                table: "TestAttempts");

            migrationBuilder.DropIndex(
                name: "IX_TestAttempts_SectionId",
                table: "TestAttempts");

            migrationBuilder.DropColumn(
                name: "SectionId",
                table: "TestAttempts");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "SectionId",
                table: "TestAttempts",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_TestAttempts_SectionId",
                table: "TestAttempts",
                column: "SectionId");

            migrationBuilder.AddForeignKey(
                name: "FK_TestAttempts_Sections_SectionId",
                table: "TestAttempts",
                column: "SectionId",
                principalTable: "Sections",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
