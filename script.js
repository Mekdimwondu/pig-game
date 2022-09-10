'use strict';
const playerWindow1 = document.querySelector('.player--0');
const playerWindow2 = document.querySelector('.player--1');

const player1 = document.querySelector('#score--0');
const player2 = document.querySelector('#score--1');
const currentScore1 = document.querySelector('#current--0');
const currentScore2 = document.querySelector('#current--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRole = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let currentScore = 0;
const scores = [0, 0];
player1.textContent = 0;
player2.textContent = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  playerWindow1.classList.toggle('player--active');
  playerWindow2.classList.toggle('player--active');
};
// to hidden the dice
dice.classList.add('hidden');

btnRole.addEventListener('click', function () {
  if (playing === true) {
    dice.classList.remove('hidden');
    const diceRandom = Math.trunc(Math.random() * 6) + 1;
    console.log(diceRandom);
    dice.src = `dice-${diceRandom}.png`;

    if (diceRandom !== 1) {
      currentScore = diceRandom + currentScore;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  //chack the bollean value{}
  if (playing) {
    scores[activePlayer] = scores[activePlayer] + currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
      document.querySelector;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      dice.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  playing = true;
  let currentScore = 0;
  const scores = [0, 0];
  player1.textContent = 0;
  player2.textContent = 0;
  let activePlayer = 0;

  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
  dice.classList.add('hidden');
  playerWindow1.classList.remove('player--winner');
  playerWindow2.classList.remove('player--winner');
  playerWindow1.classList.add('player--active');
  playerWindow2.classList.remove('player--active');
});
