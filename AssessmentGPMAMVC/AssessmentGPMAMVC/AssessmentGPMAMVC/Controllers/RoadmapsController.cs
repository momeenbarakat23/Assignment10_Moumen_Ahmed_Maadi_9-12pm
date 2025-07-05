using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using AssessmentGPMAMVC.Models;

namespace AssessmentGPMAMVC.Controllers
{
    public class RoadmapsController : Controller
    {
        private readonly AssessmentGPMAContext _context;

        public RoadmapsController(AssessmentGPMAContext context)
        {
            _context = context;
        }

        // GET: Roadmaps
        public async Task<IActionResult> Index()
        {
            return View(await _context.Roadmaps.ToListAsync());
        }

        // GET: Roadmaps/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var roadmap = await _context.Roadmaps
                .FirstOrDefaultAsync(m => m.Id == id);
            if (roadmap == null)
            {
                return NotFound();
            }

            return View(roadmap);
        }

        // GET: Roadmaps/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Roadmaps/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,title")] Roadmap roadmap)
        {
            if (ModelState.IsValid)
            {
                _context.Add(roadmap);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(roadmap);
        }

        // GET: Roadmaps/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var roadmap = await _context.Roadmaps.FindAsync(id);
            if (roadmap == null)
            {
                return NotFound();
            }
            return View(roadmap);
        }

        // POST: Roadmaps/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,title")] Roadmap roadmap)
        {
            if (id != roadmap.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(roadmap);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!RoadmapExists(roadmap.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(roadmap);
        }

        // GET: Roadmaps/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var roadmap = await _context.Roadmaps
                .FirstOrDefaultAsync(m => m.Id == id);
            if (roadmap == null)
            {
                return NotFound();
            }

            return View(roadmap);
        }

        // POST: Roadmaps/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var roadmap = await _context.Roadmaps.FindAsync(id);
            if (roadmap != null)
            {
                _context.Roadmaps.Remove(roadmap);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool RoadmapExists(int id)
        {
            return _context.Roadmaps.Any(e => e.Id == id);
        }
    }
}
