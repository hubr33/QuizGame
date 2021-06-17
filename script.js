const startButton = document.querySelector(".start-btn");
const nextButton = document.querySelector(".next-btn");
const resetButton = document.querySelector(".reset-btn");
const allButtons = document.querySelector(".buttons");
const questionContainer = document.querySelector(".question-container");
const questionP = document.querySelector(".question-container p");
const answerContainer = document.querySelector(".answer-container");
const answerButtons = document.querySelectorAll(".btn");
const resetShadow = document.querySelector(".resetShadow");
const restartGameButton = document.querySelector(".restartGame");
const stillPlayButton = document.querySelector(".stillPlay");
const finishGame = document.querySelector(".finishGame");
const playAgainButton = document.querySelector(".playAgain");
const scoreInfo = document.querySelector(".finishGame h2 p");

let gameValue = 0;
let score = 0;

let questions = [
  {
    question: "Ile to jest 2 + 2 * 2?",
    answers: [
      { text: "6", value: true },
      { text: "8", value: false },
      { text: "16", value: false },
      { text: "20", value: false },
    ],
  },
  {
    question: "Ile rok ma dni?",
    answers: [
      { text: "31", value: false },
      { text: "200", value: false },
      { text: "365", value: true },
      { text: "20", value: false },
    ],
  },
  {
    question: "Ktora z podanych marek aut pochodzi z USA?",
    answers: [
      { text: "Dodge", value: true },
      { text: "BMW", value: false },
      { text: "Toyota", value: false },
      { text: "Porsche", value: false },
    ],
  },
  {
    question: "Który system operacyjny występuje w Iphone?",
    answers: [
      { text: "Android", value: false },
      { text: "Windows", value: false },
      { text: "Linux", value: false },
      { text: "iOS", value: true },
    ],
  },
  {
    question: "W jakim serialu występuje postać Spejson?",
    answers: [
      { text: "Egzorcysta", value: false },
      { text: "Blok ekipa", value: true },
      { text: "Lucyfer", value: false },
      { text: "Włatcy much", value: false },
    ],
  },
  {
    question: "W jakim dniu rozpoczęła się druga wojna światowa?",
    answers: [
      { text: "31 październik", value: false },
      { text: "1 grudzień", value: false },
      { text: "1 wrzesień", value: true },
      { text: "6 sierpnień", value: false },
    ],
  },
];

const showAnswer = () => {
  document.querySelectorAll(".btn").forEach((el) => (el.disabled = "true"));
};

const createAnswers = () => {
  const questionText = questions[gameValue].question;
  questionP.innerText = questionText;
  scoreInfo.textContent = score;
  questions[gameValue].answers.forEach((ans) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.setAttribute("id", "gett");
    btn.innerText = ans.text;
    answerContainer.appendChild(btn);
    btn.addEventListener("click", () => {
      if (ans.value === true) {
        btn.style.backgroundColor = "#0d2";
        gameValue = gameValue + 1;
        score = score + 1;
        if (gameValue === 6) {
          nextButton.textContent = "Koniec";
        }
        showAnswer();
      } else {
        showAnswer();
        gameValue = gameValue + 1;
        btn.style.backgroundColor = "red";
      }
    });
  });
};

const startGame = () => {
  startButton.classList.add("hide");
  nextButton.classList.remove("hide");
  resetButton.classList.remove("hide");
  questionContainer.classList.add("unhide");
  answerContainer.classList.add("unhide");
  allButtons.classList.add("unhide");
  score = 0;
  createAnswers();
  console.log(answerButtons);
};

const nextQuestion = () => {
  if (gameValue === 6) {
    finishGame.classList.add("active");
    scoreInfo.textContent = score;
  } else {
    answerContainer.innerHTML = "";
    createAnswers();
  }
};

const resetGame = () => {
  resetShadow.classList.toggle("active");
  score = 0;
};

const backToFirstQuestion = () => {
  gameValue = 0;
  answerContainer.innerHTML = "";
  resetShadow.classList.remove("active");
  nextButton.textContent = "Następne";
  score = 0;
  createAnswers();
};

function playAgainFunc() {
  gameValue = 0;
  answerContainer.innerHTML = "";
  resetShadow.classList.remove("active");
  finishGame.classList.remove("active");
  nextButton.textContent = "Następne";
  score = 0;
  createAnswers();
}

playAgainButton.addEventListener("click", playAgainFunc);
restartGameButton.addEventListener("click", backToFirstQuestion);
stillPlayButton.addEventListener("click", resetGame);
nextButton.addEventListener("click", nextQuestion);
startButton.addEventListener("click", startGame);
resetButton.addEventListener("click", resetGame);
