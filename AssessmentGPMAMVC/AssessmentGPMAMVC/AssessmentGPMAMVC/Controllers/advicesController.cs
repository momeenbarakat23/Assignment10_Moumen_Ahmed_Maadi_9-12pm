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
    public class advicesController : Controller
    {
        private readonly AssessmentGPMAContext _context;

        public advicesController(AssessmentGPMAContext context)
        {
            _context = context;
        }

        // GET: advices
        public async Task<IActionResult> Index()
        {
            var assessmentGPMAContext = _context.advices.Include(a => a.Section);
            return View(await assessmentGPMAContext.ToListAsync());
        }

        // GET: advices/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var advice = await _context.advices
                .Include(a => a.Section)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (advice == null)
            {
                return NotFound();
            }

            return View(advice);
        }

        // GET: advices/Create
        public IActionResult Create()
        {
            ViewData["SectionId"] = new SelectList(_context.Sections, "Id", "Name");
            return View();
        }

        // POST: advices/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Text,ImageUrl,VideoUrl,SectionId")] advice advice)
        {
            if (ModelState.IsValid)
            {
                _context.Add(advice);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["SectionId"] = new SelectList(_context.Sections, "Id", "Name", advice.SectionId);
            return View(advice);
        }

        // GET: advices/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var advice = await _context.advices.FindAsync(id);
            if (advice == null)
            {
                return NotFound();
            }
            ViewData["SectionId"] = new SelectList(_context.Sections, "Id", "Name", advice.SectionId);
            return View(advice);
        }

        // POST: advices/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Text,ImageUrl,VideoUrl,SectionId")] advice advice)
        {
            if (id != advice.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(advice);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!adviceExists(advice.Id))
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
            ViewData["SectionId"] = new SelectList(_context.Sections, "Id", "Name", advice.SectionId);
            return View(advice);
        }

        // GET: advices/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var advice = await _context.advices
                .Include(a => a.Section)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (advice == null)
            {
                return NotFound();
            }

            return View(advice);
        }

        // POST: advices/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var advice = await _context.advices.FindAsync(id);
            if (advice != null)
            {
                _context.advices.Remove(advice);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool adviceExists(int id)
        {
            return _context.advices.Any(e => e.Id == id);
        }
    }
}
