import { quizData } from "./quiz-data.js";

class QuizApp {
    constructor() {
        this.currentSection = null;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.sectionScores = {
            التحليل_الاستراتيجي_صياغه_الاستراتيجيه: null,
            المؤشرات_الرئيسية_لقياس_الأداء: null,
            إدارة_المخاطر_الإستراتيجية: null,
            حوكمة_وإدارة_الإستراتيجية: null,
            قيادة_وإدارة_تنفيذ_الإستراتيجية: null,
            قياس_قيم_مؤشرات_الأداء: null,
            تحليل_وعرض_بيانات_الأداء: null,
            أدوات_اتخاذ_قرارات_تحسين_الأداء: null,
            إدارة_جلسات_مراجعة_الأداء_المستندة_على_البيانات: null,
            إعداد_تقارير_الأداء: null,
        };
        this.timer = null;
        this.timeRemaining = 600; // 10 minutes in seconds
        this.sectionStartTime = null;

        this.initializeApp();
    }

    initializeApp() {
        this.bindEventListeners();
        this.showWelcomeScreen();
        this.updateTotalScore();
    }

    bindEventListeners() {
        // Welcome screen
        document.getElementById("startQuizBtn").addEventListener("click", () => {
            this.showSectionSelection();
        });

        // Section selection
        document.querySelectorAll(".section-card").forEach((card) => {
            card.addEventListener("click", (e) => {
                const section = e.currentTarget.dataset.section;
                this.startSection(section);
            });
        });

        // Navigation buttons
        document
            .getElementById("backToSelectionBtn")
            .addEventListener("click", () => {
                this.showSectionSelection();
                this.stopTimer();
            });

        document.getElementById("nextBtn").addEventListener("click", () => {
            this.nextQuestion();
        });

        document
            .getElementById("continueToSectionsBtn")
            .addEventListener("click", () => {
                this.showSectionSelection();
            });

        document.getElementById("showSummaryBtn").addEventListener("click", () => {
            this.showFinalSummary();
        });

        document.getElementById("restartQuizBtn").addEventListener("click", () => {
            this.resetQuiz();
        });
    }

    showWelcomeScreen() {
        document.getElementById("welcomeScreen").style.display = "flex";
        document.getElementById("sectionSelection").style.display = "none";
        document.getElementById("quizInterface").style.display = "none";
        document.getElementById("sectionResults").style.display = "none";
        document.getElementById("finalSummary").style.display = "none";
    }

    showSectionSelection() {
        document.getElementById("welcomeScreen").style.display = "none";
        document.getElementById("sectionSelection").style.display = "block";
        document.getElementById("quizInterface").style.display = "none";
        document.getElementById("sectionResults").style.display = "none";
        document.getElementById("finalSummary").style.display = "none";

        this.updateSectionScores("التحليل_الاستراتيجي_صياغه_الاستراتيجيه", "المؤشرات_الرئيسية_لقياس_الأداء"
            , "إدارة_المخاطر_الإستراتيجية","حوكمة_وإدارة_الإستراتيجية"
            , "قيادة_وإدارة_تنفيذ_الإستراتيجية","قياس_قيم_مؤشرات_الأداء"
            , "تحليل_وعرض_بيانات_الأداء", "أدوات_اتخاذ_قرارات_تحسين_الأداء"
            , "إدارة_جلسات_مراجعة_الأداء_المستندة_على_البيانات","إعداد_تقارير_الأداء");
        this.checkAllSectionsCompleted();
    }

    updateSectionScores(...name) {
        for (var i = 0; i < 10; i++) {
            const ScoreEl = document.getElementById(name[i]);
            if (this.sectionScores[name[i]] !== null) {
                ScoreEl.textContent = `${this.sectionScores[name[i]]}/20 (${Math.round(
                    ((this.sectionScores[name[i]]) / 20) * 100
                )}%)`;
                ScoreEl.classList.add("completed");
            }
        }
    }

    checkAllSectionsCompleted() {
        const completedSections = Object.values(this.sectionScores).filter(
            (score) => score !== null
        ).length;
        if (completedSections > 0) {
            document.getElementById("showSummaryBtn").style.display = "inline-flex";
        }
    }

    updateTotalScore() {
        const completedScores = Object.values(this.sectionScores).filter(
            (score) => score !== null
        );
        const totalScore = completedScores.reduce((sum, score) => sum + score, 0);
        document.getElementById("totalScore").textContent = totalScore;
    }

    startSection(sectionKey) {
        this.currentSection = sectionKey;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.timeRemaining = 600; // Reset to 10 minutes
        this.sectionStartTime = Date.now();

        // Update UI
        document.getElementById("currentSection").textContent =
            quizData[sectionKey].name;
        document.getElementById("sectionSelection").style.display = "none";
        document.getElementById("quizInterface").style.display = "block";

        this.startTimer();
        this.loadQuestion();
        this.updateProgress();
    }

    startTimer() {
        this.updateTimerDisplay();
        this.timer = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();

            if (this.timeRemaining <= 0) {
                this.timeUp();
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    updateTimerDisplay() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        const timeString = `${minutes}:${seconds.toString().padStart(2, "0")}`;

        const timerEl = document.getElementById("timer");
        const timerFillEl = document.getElementById("timerFill");

        timerEl.textContent = timeString;

        // Update timer bar
        const percentRemaining = (this.timeRemaining / 600) * 100;
        timerFillEl.style.width = `${percentRemaining}%`;

        // Update colors based on time remaining
        timerEl.classList.remove("warning", "danger");
        timerFillEl.classList.remove("warning", "danger");

        if (this.timeRemaining <= 60) {
            // Last minute
            timerEl.classList.add("danger");
            timerFillEl.classList.add("danger");
        } else if (this.timeRemaining <= 180) {
            // Last 3 minutes
            timerEl.classList.add("warning");
            timerFillEl.classList.add("warning");
        }
    }

    timeUp() {
        this.stopTimer();
        alert("Time is up! The section will be submitted automatically.");
        this.finishSection();
    }

    loadQuestion() {
        const question =
            quizData[this.currentSection].questions[this.currentQuestionIndex];

        // Update question number and text
        document.getElementById("questionNumber").textContent =
            this.currentQuestionIndex + 1;
        document.getElementById("questionText").textContent = question.question;

        const answersContainer = document.getElementById("answersContainer");
        answersContainer.innerHTML = "";

        question.answers.forEach((answer, index) => {
            const button = document.createElement("button");
            button.className = "answer-btn";
            button.textContent = answer;
            button.addEventListener("click", () => this.selectAnswer(index, button));
            answersContainer.appendChild(button);
        });

        // Disable next button initially
        document.getElementById("nextBtn").disabled = true;
    }

    selectAnswer(answerIndex, buttonElement) {
        // Remove selection from all buttons
        document.querySelectorAll(".answer-btn").forEach((btn) => {
            btn.classList.remove("selected");
        });

        // Select clicked button
        buttonElement.classList.add("selected");

        // Store the answer
        this.userAnswers[this.currentQuestionIndex] = answerIndex;

        // Enable next button
        document.getElementById("nextBtn").disabled = false;
    }

    nextQuestion() {
        // Show correct/incorrect feedback briefly
        this.showAnswerFeedback();

        setTimeout(() => {
            this.currentQuestionIndex++;

            if (
                this.currentQuestionIndex >=
                quizData[this.currentSection].questions.length
            ) {
                this.finishSection();
            } else {
                this.loadQuestion();
                this.updateProgress();
            }
        }, 1500);
    }

    showAnswerFeedback() {
        const question =
            quizData[this.currentSection].questions[this.currentQuestionIndex];
        const correctIndex = question.correct;
        const userAnswer = this.userAnswers[this.currentQuestionIndex];

        document.querySelectorAll(".answer-btn").forEach((btn, index) => {
            if (index === correctIndex) {
                btn.classList.add("correct");
            } else if (index === userAnswer && index !== correctIndex) {
                btn.classList.add("incorrect");
            }
            btn.disabled = true;
        });

        // Disable next button during feedback
        document.getElementById("nextBtn").disabled = true;
    }

    updateProgress() {
        const progress =
            ((this.currentQuestionIndex + 1) /
                quizData[this.currentSection].questions.length) *
            100;
        document.getElementById("progressFill").style.width = `${progress}%`;
        document.getElementById("progressText").textContent = `Question ${this.currentQuestionIndex + 1
            } of ${quizData[this.currentSection].questions.length}`;
    }

    finishSection() {
        this.stopTimer();

        // Calculate score
        const questions = quizData[this.currentSection].questions;
        let correctAnswers = 0;

        questions.forEach((question, index) => {
            if (this.userAnswers[index] === question.correct) {
                correctAnswers++;
            }
        });

        // Store section score
        this.sectionScores[this.currentSection] = correctAnswers;
        this.updateTotalScore();

        // Calculate time taken
        const timeTaken = Math.floor((Date.now() - this.sectionStartTime) / 1000);
        const minutes = Math.floor(timeTaken / 60);
        const seconds = timeTaken % 60;

        // Show results
        this.showSectionResults(correctAnswers, minutes, seconds);
    }

    showSectionResults(score, minutes, seconds) {
        document.getElementById("quizInterface").style.display = "none";
        document.getElementById("sectionResults").style.display = "flex";

        // Update results display
        document.getElementById("sectionName").textContent =
            quizData[this.currentSection].name;
        document.getElementById("sectionScoreNumber").textContent = score;
        document.getElementById("scorePercentage").textContent = `${Math.round(
            (score / 20) * 100
        )}%`;
        document.getElementById(
            "timeTaken"
        ).textContent = `Time: ${minutes}:${seconds.toString().padStart(2, "0")}`;
    }

    showFinalSummary() {
        document.getElementById("sectionSelection").style.display = "none";
        document.getElementById("finalSummary").style.display = "flex";

        // Calculate total score
        const completedScores = Object.values(this.sectionScores).filter(
            (score) => score !== null
        );
        const totalScore = completedScores.reduce((sum, score) => sum + score, 0);
        const maxPossibleScore = completedScores.length * 20;
        const percentage = Math.round((totalScore / maxPossibleScore) * 100);

        // Update summary display
        document.getElementById("finalTotalScore").textContent = totalScore;
        document.querySelector(
            ".total-score-total"
        ).textContent = `/ ${maxPossibleScore}`;
        document.getElementById("finalPercentage").textContent = `${percentage}%`;

        // Update individual section scores
        
        const summarylist = ["التحليل_الاستراتيجي_صياغه_الاستراتيجيه", "المؤشرات_الرئيسية_لقياس_الأداء"
            , "إدارة_المخاطر_الإستراتيجية", "حوكمة_وإدارة_الإستراتيجية"
            , "قيادة_وإدارة_تنفيذ_الإستراتيجية", "قياس_قيم_مؤشرات_الأداء"
            , "تحليل_وعرض_بيانات_الأداء", "أدوات_اتخاذ_قرارات_تحسين_الأداء"
            , "إدارة_جلسات_مراجعة_الأداء_المستندة_على_البيانات", "إعداد_تقارير_الأداء"];

        summarylist.forEach((e) => {
            let summaryElement = document.getElementById(`${e}score`);
            if (summaryElement !==null) {
                summaryElement.textContent =
                    this.sectionScores[e] !== null
                        ? `${this.sectionScores[e]}/20 (${Math.round(
                            (this.sectionScores[e] / 20) * 100
                        )}%)`
                        : "لم يتم إنهاء القسم";
            }
            
        });


        

        getData()
        
        this.updateProgressRings();
    }

    updateProgressRings() {
    const sections = [
        "التحليل_الاستراتيجي_صياغه_الاستراتيجيه",
        "المؤشرات_الرئيسية_لقياس_الأداء",
        "إدارة_المخاطر_الإستراتيجية",
        "حوكمة_وإدارة_الإستراتيجية",
        "قيادة_وإدارة_تنفيذ_الإستراتيجية",
        "قياس_قيم_مؤشرات_الأداء",
        "تحليل_وعرض_بيانات_الأداء",
        "أدوات_اتخاذ_قرارات_تحسين_الأداء",
        "إدارة_جلسات_مراجعة_الأداء_المستندة_على_البيانات",
        "إعداد_تقارير_الأداء"
    ];

    const maxScore = 20;

    sections.forEach((section) => {
        const ring = document.getElementById(`progress_${section}`);
        const score = this.sectionScores?.[section] ?? null;

        if (ring) {
            if (score !== null && score > 0) {
                const degrees = (score / maxScore) * 360;
                ring.style.background = `conic-gradient(#4285f4 0deg ${degrees}deg, #eeeeee ${degrees}deg 360deg)`;
            } else {
                
              
                ring.style.background = `conic-gradient(var(--gray-200) 0deg 360deg)`;
            }
        }
    });
}


    resetQuiz() {
        // Reset all data
        this.currentSection = null;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.sectionScores = {
            التحليل_الاستراتيجي_صياغه_الاستراتيجيه: null,
            المؤشرات_الرئيسية_لقياس_الأداء: null,
            إدارة_المخاطر_الإستراتيجية: null,
            حوكمة_وإدارة_الإستراتيجية: null,
            قيادة_وإدارة_تنفيذ_الإستراتيجية: null,
            قياس_قيم_مؤشرات_الأداء: null,
            تحليل_وعرض_بيانات_الأداء: null,
            أدوات_اتخاذ_قرارات_تحسين_الأداء: null,
            إدارة_جلسات_مراجعة_الأداء_المستندة_على_البيانات: null,
            إعداد_تقارير_الأداء: null,
        };
        this.stopTimer();

        // Reset UI
        document.querySelectorAll(".score-display").forEach((el) => {
            el.classList.remove("completed");
            el.textContent = "Not attempted";
        });

        document.getElementById("showSummaryBtn").style.display = "none";
        this.updateTotalScore();
        this.showWelcomeScreen();
    }
}

// Initialize the quiz app when the page loads
document.addEventListener("DOMContentLoaded", () => {
    new QuizApp();
});

let data = {
    ToTalSc: "",
    ScAllSec:[]
};
function getData() {
    const totalScore = document.getElementById("totalScore").textContent
    data.ToTalSc = totalScore;
    const Sectionlist = ["التحليل_الاستراتيجي_صياغه_الاستراتيجيه", "المؤشرات_الرئيسية_لقياس_الأداء"
        , "إدارة_المخاطر_الإستراتيجية", "حوكمة_وإدارة_الإستراتيجية"
        , "قيادة_وإدارة_تنفيذ_الإستراتيجية", "قياس_قيم_مؤشرات_الأداء"
        , "تحليل_وعرض_بيانات_الأداء", "أدوات_اتخاذ_قرارات_تحسين_الأداء"
        , "إدارة_جلسات_مراجعة_الأداء_المستندة_على_البيانات", "إعداد_تقارير_الأداء"];
    Sectionlist.forEach(e => {
        const scoreOfSec = document.getElementById(`${e}score`)
        if (scoreOfSec !==null) {
            data.ScAllSec.push(scoreOfSec.textContent.split("/")[0])
        }
        
    })
    

    const params = new URLSearchParams();
    params.append("ToTalSc", data.ToTalSc);

    data.ScAllSec.forEach(sec => {
        params.append("ScAllSec", sec);
    });

    fetch(`/Assessment/GetScoreForSection?${params.toString()}`).then(response => {
        if (!response.ok) throw new Error("Something went wrong");
        return response.json();
    })
        .then(result => {
            console.log("Data saved successfully:", result);
        })
        .catch(error => {
            console.error("Error:", error);
        });
    
    

}
