// Array that holds quiz questions

const data = [
  {
    id: 1,
    question: 'Which group of birds is called a murder?',
    answers: [
      { answer: 'Owls', isCorrect: false },
      { answer: 'Crows', isCorrect: true },
      { answer: 'Ducks', isCorrect: false },
      { answer: 'Robins', isCorrect: false },
    ],
  },
  {
    id: 2,
    question: 'Which animal is famous for playing dead?',
    answers: [
      { answer: 'Possum', isCorrect: true },
      { answer: 'Mice', isCorrect: false },
      { answer: 'Giraffe', isCorrect: false },
      { answer: 'Pigeon', isCorrect: false },
    ],
  },
  {
    id: 3,
    question: 'Which animal is known for loving honey?',
    answers: [
      { answer: 'Elephant', isCorrect: false },
      { answer: 'Leopard', isCorrect: false },
      { answer: 'Dog', isCorrect: false },
      { answer: 'Bear', isCorrect: true },
    ],
  },
  {
    id: 4,
    question: 'What is the fastest land animal?',
    answers: [
      { answer: 'Sloth', isCorrect: false },
      { answer: 'Cheetah', isCorrect: true },
      { answer: 'Snail', isCorrect: false },
      { answer: 'Penguin', isCorrect: false },
    ],
  },
];

const gameScreen = document.querySelector('.game');
const resultScreen = document.querySelector('.result');
const question = document.querySelector('.question');
const answersContainer = document.querySelector('.answers');
const submit = document.querySelector('.submit-btn');
const playAgain = document.querySelector('.play');
const correctAnswers = document.querySelector('.correct');
const wrongAnswers = document.querySelector('.wrong');
const totalAnswers = document.querySelector('.score');

// Initial index for question when quiz loads
let qIndex = 0;

let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const resetGame = () => {
  qIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  total = 0;
  showQuestion(qIndex);
};

playAgain.addEventListener('click', () => {
  resetGame();
  resultScreen.style.display = 'none';
  gameScreen.style.display = 'block';
});

const showResult = () => {
  resultScreen.style.display = 'block';
  gameScreen.style.display = 'none';
  correctAnswers.textContent = `Correct: ${correctCount}`;
  wrongAnswers.textContent = `Wrong: ${wrongCount}`;
  totalAnswers.textContent = `${(correctCount - wrongCount) * 25}`;
};

const showQuestion = (questionNumber) => {
  if (qIndex === data.length) {
    showResult();
  }
  selectedAnswer = null;
  question.textContent = data[questionNumber].question;
  answersContainer.innerHTML = data[questionNumber].answers
    .map(
      (item, index) =>
        `<div class="answer">
        <input type="radio" id="${index}" value="${item.isCorrect}" name="answer" />
        <label for="${index}">${item.answer}</label>
      </div>`
    )
    .join('');

  selectAnswer();
};

const selectAnswer = () => {
  // Select all inputs that are children of answers
  answersContainer.querySelectorAll('input').forEach((answer) =>
    answer.addEventListener('click', (event) => {
      selectedAnswer = event.target.value;
    })
  );
};

const submitAnswer = () => {
  submit.addEventListener('click', () => {
    if (selectedAnswer !== null) {
      selectedAnswer === 'true' ? correctCount++ : wrongCount++;
      qIndex++;
      showQuestion(qIndex);
    } else alert('Select answer');
  });
};

showQuestion(qIndex);
submitAnswer();
resetGame();
