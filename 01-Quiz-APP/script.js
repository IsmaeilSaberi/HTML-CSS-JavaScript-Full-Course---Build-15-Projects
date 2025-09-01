// Dom elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

// Quiz questions
const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
];

// Quiz state vars
let currentQuestionIndex = 0; // ایندکس سوال فعلی
let score = 0; // امتیاز قبل از شروع
let answersDisabled = false; //  زمانی که جواب درستی را زدیم و اتفاقی دوباره زدیم نمی خواهیم امتیاز افزایش یابد و تا زمانی که سوال بعدی نیامده باید غیرفعال باشد

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// event listeners
startButton.addEventListener("click", () => sum(5, 7)); // می خواهیم با فشرده شدن دکمه شروع آزمون تابع startQuiz اجرا شود
restartButton.addEventListener("click", restartQuiz); // می خواهیم با فشرده شدن دکمه دوباره آزمون تابع restartQuiz اجرا شود

const sum = (a, b) => {
  console.log(a + b);
};

function startQuiz() {
  // تابعی که موقع فشرده شدن دکمه شروع آزمون اجرا می شود
  // reset vars یا باز تنظیم مقادیر اولیه
  currentQuestionIndex = 0;
  scoreSpan.textContent = 0;

  startScreen.classList.remove("active"); // کلاس اکتیو از لیست کلاس های صفحه استارت حذف می شود و در نتیجه این صفحه محو می شود
  quizScreen.classList.add("active"); // کلاس اکتیو به لیست کلاس های صفحه کوئیز اضافه می شود و در نتیجه این صفحه دیده می شود

  showQuestion();
}

function showQuestion() {
  // reset state یا باز تنظیم حالت
  answersDisabled = false;

  const currentQuestion = quizQuestions[currentQuestionIndex]; //ذخیره کردن اولین سوال در متغیری با نام سوال جاری
  currentQuestionSpan.textContent = currentQuestionIndex + 1; // آپدیت اسپنی که شماره سوال جاری را دارد

  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100; // محاسبه درصد برای پروگرس بار با تقسیم ایندکس سوال جاری بر طول سوالات ضربدر 100
  progressBar.style.width = progressPercent + "%"; // افزودن این عدد به علاوه نماد درصد به عرض پروگرس بار

  questionText.textContent = currentQuestion.question; // افزودن متن سوال اول یا سوال با ایندکس سوال جاری به متن سوال
  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");

    // دیتاست پراپرتی است که به ما امکان می دهد دیتای مشخصی را به باتنن بیافزاییم یا اضافه کنیم
    button.dataset.correct = answer.correct;
  });
}

function restartQuiz() {
  console.log("quiz restarted");
}
