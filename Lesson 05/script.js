'use strict';

const checkBtn = document.getElementById('checkBtn');
const againBtn = document.getElementById('againBtn');
const scoreElement = document.getElementById('score');
const highscoreElement = document.getElementById('highscore');
const messageElement = document.getElementById('message');
const inputNumber = document.getElementById('inputNumber');

console.log(checkBtn, againBtn, scoreElement, highscoreElement, inputNumber);

let randomNumber = Math.floor(Math.random() * 20) + 1;
let currentScore = 20;
let highScore = 0;

function resetGame() {
  currentScore = 20;
  updateCurrentScore(currentScore);
  updateMessage('Start guessing...');
  inputNumber.value = null;
  randomNumber = Math.floor(Math.random() * 20) + 1;
  document.body.style.background = '#222';
}

function updateCurrentScore(score) {
  currentScore = score;
  scoreElement.textContent = currentScore;
}

function updateHighScore(score) {
  highScore = score;
  highscoreElement.textContent = highScore;
}

function updateMessage(message) {
  messageElement.textContent = message;
}

function success() {
  updateMessage('Correct');
  document.body.style.background = '#60b347';
  if (currentScore > highScore) updateHighScore(currentScore);
}

function checkGuess() {
  console.log(inputNumber.value);
  console.log(randomNumber);
  if (!inputNumber.value || inputNumber.value > 20 || inputNumber.value < 1) {
    updateMessage('Invalid entry. Please try again.');
    inputNumber.value = null;
  } else if (inputNumber.value == randomNumber) success();
  else if (inputNumber.value > randomNumber) {
    updateMessage('Too high');
    updateCurrentScore(currentScore - 1);
    inputNumber.value = null;
  } else {
    updateMessage('Too low');
    updateCurrentScore(currentScore - 1);
    inputNumber.value = null;
  }
}

checkBtn.addEventListener('click', checkGuess);
againBtn.addEventListener('click', resetGame);
