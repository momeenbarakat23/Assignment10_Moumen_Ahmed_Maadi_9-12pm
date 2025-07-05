
using System;
using System.Collections.Generic;
using AssessmentGPMA.Domain.models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace AssessmentGPMAMVC.Models;

public partial class AssessmentGPMAContext : IdentityDbContext<AppUser>
{
    public AssessmentGPMAContext()
    {
    }

    public AssessmentGPMAContext(DbContextOptions<AssessmentGPMAContext> options)
        : base(options)
    {
    }



    public virtual DbSet<Question> Questions { get; set; }

    public virtual DbSet<QuestionFile> QuestionFiles { get; set; }

    public virtual DbSet<Roadmap> Roadmaps { get; set; }

    public virtual DbSet<Section> Sections { get; set; }

    public virtual DbSet<TestAttempt> TestAttempts { get; set; }

    public virtual DbSet<UserAnswer> UserAnswers { get; set; }

    public virtual DbSet<advice> advices { get; set; }


}