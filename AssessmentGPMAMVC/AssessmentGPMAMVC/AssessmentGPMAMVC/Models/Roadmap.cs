
using System;
using System.Collections.Generic;

namespace AssessmentGPMAMVC.Models;

public partial class Roadmap
{
    public int Id { get; set; }

    public string title { get; set; }

    public virtual ICollection<Section> Sections { get; set; } = new List<Section>();
}