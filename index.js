// quiz questions captured in a separate file - questions.js

// Elements
let id = 0;
let score = 0;

let currentId = document.getElementById('currentId');
let totalIds = document.getElementById('totalIds');
let questionText = document.getElementById('question-text');
let answerA = document.getElementById('a');
let answerB = document.getElementById('b');
let answerC = document.getElementById('c');
let answerD = document.getElementById('d');

let answer;

let result = document.getElementById('result');

let next = document.getElementById('next');

const setQuestion = () => {
  // Current Question
  currentId.innerText = id + 1;

  // Answer
  answer = quizQuestions[id].answer;
  console.log('The answer is ' + answer);

  // How many questions
  totalIds.innerText = quizQuestions.length;

  // Assign first question
  questionText.innerText = quizQuestions[id].question;
  answerA.innerText = quizQuestions[id].choices['a'];
  answerB.innerText = quizQuestions[id].choices['b'];
  answerC.innerText = quizQuestions[id].choices['c'];
  answerD.innerText = quizQuestions[id].choices['d'];

  // Hide result section
  showResult(false);
};

const checkAnswer = (e) => {
  let selection = e.target.id;

  if (selection === answer) {
    console.log('Nice Job!');
    showResult(true);
  } else {
    console.log('Try again.');
  }
};

const showResult = (show) => {
  // hide / hide result section
  if (show) {
    result.style.display = 'block';
  } else {
    result.style.display = 'none';
  }
};

// Add eventListeners
answerA.addEventListener('click', (e) => checkAnswer(e));
answerB.addEventListener('click', (e) => checkAnswer(e));
answerC.addEventListener('click', (e) => checkAnswer(e));
answerD.addEventListener('click', (e) => checkAnswer(e));

next.addEventListener('click', () => {
  if (id < quizQuestions.length - 1) {
    id += 1;
    console.log('Current Question: ', id + 1);
  }
  setQuestion();
});

setQuestion(); // initialize the game
