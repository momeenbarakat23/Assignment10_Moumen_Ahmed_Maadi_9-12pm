export const quizData = {
    التحليل_الاستراتيجي_صياغه_الاستراتيجيه: {
        name: "التحليل الاستراتيجي و صياغه الاستراتيجيه",
    icon: "📊",
    questions:[],
    },
    المؤشرات_الرئيسية_لقياس_الأداء: {
        name: "المؤشرات الرئيسية لقياس الأداء",
    icon: "📊",
    questions:[],
    },
    إدارة_المخاطر_الإستراتيجية: {
        name: "إدارة المخاطر الإستراتيجية",
    icon: "📊",
    questions:[],
    },
    حوكمة_وإدارة_الإستراتيجية: {
        name: " حوكمة وإدارة الإستراتيجية",
    icon: "📊",
    questions:[],
    },
    قيادة_وإدارة_تنفيذ_الإستراتيجية: {
        name: "قيادة وإدارة تنفيذ الإستراتيجية",
    icon: "📊",
    questions:[],
    },
    قياس_قيم_مؤشرات_الأداء: {
        name: "قياس قيم مؤشرات الأداء",
    icon: "📊",
    questions:[],
    },
    تحليل_وعرض_بيانات_الأداء: {
        name: "تحليل وعرض بيانات الأداء",
    icon: "📊",
    questions:[],
    },
    أدوات_اتخاذ_قرارات_تحسين_الأداء: {
        name: "أدوات اتخاذ قرارات تحسين الأداء",
    icon: "📊",
    questions:[],
    },
    إدارة_جلسات_مراجعة_الأداء_المستندة_على_البيانات
        : {
        name: " إدارة جلسات مراجعة الأداء المستندة على البيانات",
    icon: "📊",
    questions:[],
    }, إعداد_تقارير_الأداء: {
        name: "إعداد تقارير الأداء",
    icon: "📊",
    questions:[],
  },
};



async function loadQuizData() {

    const res = await fetch("/api/get-Quest");
    const quests = await res.json();


    quests.forEach((quest) => {
        let namesection = quest.section.name;
        quizData[namesection].questions.push({
            question: quest.text,
            answers: [
                quest.choiceA + " A",
                quest.choiceB + " B",
                quest.choiceC + " C",
                quest.choiceD + " D",
            ],
            correct: quest.correctAnswer, 
        });
    });

  
}


loadQuizData();

