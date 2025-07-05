using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AssessmentGPMAMVC.Migrations
{
    /// <inheritdoc />
    public partial class relbetQfandUser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "title",
                table: "Roadmaps",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "QuestionFiles",
                type: "nvarchar(450)",
                maxLength: 450,
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_QuestionFiles_UserId",
                table: "QuestionFiles",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_QuestionFiles_AspNetUsers_UserId",
                table: "QuestionFiles",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_QuestionFiles_AspNetUsers_UserId",
                table: "QuestionFiles");

            migrationBuilder.DropIndex(
                name: "IX_QuestionFiles_UserId",
                table: "QuestionFiles");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "QuestionFiles");

            migrationBuilder.AlterColumn<string>(
                name: "title",
                table: "Roadmaps",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");
        }
    }
}
