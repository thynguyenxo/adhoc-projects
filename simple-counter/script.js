const counter = document.querySelector('.counter');
// const btn = document.querySelector('.btn');
const decreaseBtn = document.querySelector('#decrease-btn');
const resetBtn = document.querySelector('#reset-btn');
const increaseBtn = document.querySelector('#increase-btn');


// click on decrease btn to reduce from the current number
decreaseBtn.addEventListener('click', () => {
  counter.textContent--;

  if (counter.textContent < 0) {
    counter.classList.add('decreased');
  }
});

// click on increase btn to add to the current number
increaseBtn.addEventListener('click', () => {
  counter.textContent++;

  if (counter.textContent > 0) {
    counter.classList.remove('decreased');
    counter.classList.add('increased');
  }
});

// click on reset btn to reset counter
resetBtn.addEventListener('click', () => {
  counter.textContent = 0;
  counter.classList.remove('increased');
  counter.classList.remove('decreased');
});