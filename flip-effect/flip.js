let flipIndex = 0;
const flipBoxes = document.querySelectorAll('.small-box');

function flipBox(index) {
  flipBoxes.forEach((box, i) => {
    box.classList.toggle('active', i === index);
  });
}

document.querySelector('.left-btn').addEventListener('click', () => {
  flipIndex = (flipIndex > 0) ? flipIndex - 1 : flipBoxes.length - 1;
  flipBox(flipIndex);
});

document.querySelector('.right-btn').addEventListener('click', () => {
  flipIndex = (flipIndex < flipBoxes.length - 1) ? flipIndex + 1 : 0;
  flipBox(flipIndex);
});

// Initialize
flipBox(flipIndex);
