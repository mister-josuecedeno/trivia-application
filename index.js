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

let answers = document.querySelectorAll('.answer');
let answer;

let question = document.getElementById('question');
let result = document.getElementById('result');

let message = document.getElementById('message');
let next = document.getElementById('next');

const setQuestion = () => {
  // Current Question
  currentId.innerText = id + 1;

  // Answer
  answer = quizQuestions[id].answer;
  console.log('The answer is ' + answer);

  // How many questions
  totalIds.innerText = quizQuestions.length;

  // Assign question
  questionText.innerText = quizQuestions[id].question;
  answerA.innerText = `a. ${quizQuestions[id].choices['a']}`;
  answerB.innerText = `b. ${quizQuestions[id].choices['b']}`;
  answerC.innerText = `c. ${quizQuestions[id].choices['c']}`;
  answerD.innerText = `d. ${quizQuestions[id].choices['d']}`;

  // Hide result section
  showClear(false);
  showResult(false);
  enableAnswers(true);
};

const checkAnswer = (e) => {
  let selection = e.target.id;

  if (selection === answer) {
    message.innerText = 'Well Done! Correct!';
    score++;
    e.target.classList.add('success');
    showMessage(true);
    showNext(true);
    showClear(false);
  } else {
    console.log('Try again.');
    message.innerText = `Sorry. The answer is ${answer}.`;
    e.target.classList.add('failure');
    showMessage(true);
    showNext(true);
    showClear(false);
  }

  //markAnswers(true);
  enableAnswers(false);
  showResult(true);
};

// ENABLE/DISABLE THE ANSWER BUTTONS
const enableAnswers = (enable) => {
  answers.forEach((a) => {
    if (!enable) {
      a.classList.add('no-click');
    } else {
      a.classList.remove('no-click');
      a.classList.remove('success');
      a.classList.remove('failure');
    }
  });
};

// SHOW / HIDE BUTTONS
const showMessage = (show) => {
  if (show) {
    message.style.display = 'block';
  } else {
    message.style.display = 'none';
  }
};

const showNext = (show) => {
  if (show) {
    next.style.display = 'block';
  } else {
    next.style.display = 'none';
  }
};

const showClear = (show) => {
  if (show) {
    clear.style.display = 'block';
  } else {
    clear.style.display = 'none';
  }
};

const showResult = (show) => {
  if (show) {
    result.style.display = 'block';
  } else {
    result.style.display = 'none';
  }
};

const showQuestion = (show) => {
  if (show) {
    question.style.display = 'block';
  } else {
    question.style.display = 'none';
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
    setQuestion();
  } else {
    console.log('Show the score and Clear');
    showQuestion(false);

    message.innerText = `You answered ${score} out of ${
      quizQuestions.length
    } (${((score / quizQuestions.length) * 100).toFixed(0)}%) correctly.`;
    showNext(false);
    showClear(true);
    showResult(true);
  }
});

// Restart the quiz
clear.addEventListener('click', () => {
  id = 0;
  score = 0;
  setQuestion();
  showQuestion(true);
});

setQuestion(); // initialize the game
