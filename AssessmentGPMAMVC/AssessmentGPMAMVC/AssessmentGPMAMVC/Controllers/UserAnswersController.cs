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
    public class UserAnswersController : Controller
    {
        private readonly AssessmentGPMAContext _context;

        public UserAnswersController(AssessmentGPMAContext context)
        {
            _context = context;
        }

        // GET: UserAnswers
        public async Task<IActionResult> Index()
        {
            var assessmentGPMAContext = _context.UserAnswers.Include(u => u.Attempt).Include(u => u.Question).Include(u => u.User);
            return View(await assessmentGPMAContext.ToListAsync());
        }

        // GET: UserAnswers/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var userAnswer = await _context.UserAnswers
                .Include(u => u.Attempt)
                .Include(u => u.Question)
                .Include(u => u.User)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (userAnswer == null)
            {
                return NotFound();
            }

            return View(userAnswer);
        }

        // GET: UserAnswers/Create
        public IActionResult Create()
        {
            ViewData["AttemptId"] = new SelectList(_context.TestAttempts, "Id", "Id");
            ViewData["QuestionId"] = new SelectList(_context.Questions, "Id", "Id");
            ViewData["UserId"] = new SelectList(_context.Users, "Id", "Id");
            return View();
        }

        // POST: UserAnswers/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,AttemptId,UserId,QuestionId,Answer,OurAnswer,fileURL,AnsweredAt")] UserAnswer userAnswer)
        {
            if (ModelState.IsValid)
            {
                _context.Add(userAnswer);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["AttemptId"] = new SelectList(_context.TestAttempts, "Id", "Id", userAnswer.AttemptId);
            ViewData["QuestionId"] = new SelectList(_context.Questions, "Id", "Id", userAnswer.QuestionId);
            ViewData["UserId"] = new SelectList(_context.Users, "Id", "Id", userAnswer.UserId);
            return View(userAnswer);
        }

        // GET: UserAnswers/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var userAnswer = await _context.UserAnswers.FindAsync(id);
            if (userAnswer == null)
            {
                return NotFound();
            }
            ViewData["AttemptId"] = new SelectList(_context.TestAttempts, "Id", "Id", userAnswer.AttemptId);
            ViewData["QuestionId"] = new SelectList(_context.Questions, "Id", "Id", userAnswer.QuestionId);
            ViewData["UserId"] = new SelectList(_context.Users, "Id", "Id", userAnswer.UserId);
            return View(userAnswer);
        }

        // POST: UserAnswers/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,AttemptId,UserId,QuestionId,Answer,OurAnswer,fileURL,AnsweredAt")] UserAnswer userAnswer)
        {
            if (id != userAnswer.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(userAnswer);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!UserAnswerExists(userAnswer.Id))
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
            ViewData["AttemptId"] = new SelectList(_context.TestAttempts, "Id", "Id", userAnswer.AttemptId);
            ViewData["QuestionId"] = new SelectList(_context.Questions, "Id", "Id", userAnswer.QuestionId);
            ViewData["UserId"] = new SelectList(_context.Users, "Id", "Id", userAnswer.UserId);
            return View(userAnswer);
        }

        // GET: UserAnswers/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var userAnswer = await _context.UserAnswers
                .Include(u => u.Attempt)
                .Include(u => u.Question)
                .Include(u => u.User)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (userAnswer == null)
            {
                return NotFound();
            }

            return View(userAnswer);
        }

        // POST: UserAnswers/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var userAnswer = await _context.UserAnswers.FindAsync(id);
            if (userAnswer != null)
            {
                _context.UserAnswers.Remove(userAnswer);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool UserAnswerExists(int id)
        {
            return _context.UserAnswers.Any(e => e.Id == id);
        }
    }
}
