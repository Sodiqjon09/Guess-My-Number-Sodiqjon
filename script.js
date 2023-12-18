const input = document.getElementById('input');
const message = document.getElementById('message');
const body = document.getElementById('body');
const score = document.getElementById('score');
const span = document.getElementById('span');

let number = 20;
let shunchaki = 0;
let yutdim = 0;

score.innerHTML = `💯 Score: <span class="score">${number}</span>`;
span.innerHTML = shunchaki;

const Btn = () => {
  const el = parseInt(input.value);

  if (!isNaN(el)) {
    const tasodifiySon = Math.floor(Math.random() * 2);
    if (el === tasodifiySon) {
      message.innerHTML = `<p>Tog'ri topding qoyile 🏆</p>`;
      body.style.background = 'rgb(0, 255, 0)';
      body.style.transition = 'all 0.9s';
      message.style.color = '#fff';

      yutdim += 1;

      if (yutdim > shunchaki) {
        shunchaki = yutdim;
        span.innerHTML = shunchaki;
      }
    } else {
      message.innerHTML = `<p>No'tog'ri javob doyimgi dek</p>`;
      message.style.lineHeight = '30px';
      message.style.color = '#fff';
      body.style.background = 'red';
      body.style.transition = 'all 0.9s';

      yutdim = 0;
    }
  } else {
    message.innerHTML = `<p>Tog'ri son kiriting</p>`;
  }

  score.innerHTML = `💯 Score: <span class="score">${number}</span>`;

  if (number === 0) {
    resetGame();
  }
};

const resetGame = () => {
  number = 20;
  score.innerHTML = `💯 Score: <span class="score">${number}</span>`;
  message.innerHTML = `<p>Start guessing...</p>`;
  body.style.background = '';
  input.value = '';
};
