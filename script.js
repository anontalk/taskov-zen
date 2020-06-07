const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = 'Udahnite!';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Zadržite dah!';

    setTimeout(() => {
      text.innerText = 'Izdahnite!';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);
