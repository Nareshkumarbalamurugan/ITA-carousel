let rotateIndex = 0;
const rotateBoxes = document.querySelectorAll('.small-box');

function rotateBox(index) {
  rotateBoxes.forEach((box, i) => {
    box.classList.toggle('active', i === index);
  });
}

document.querySelector('.left-btn').addEventListener('click', () => {
  rotateIndex = (rotateIndex > 0) ? rotateIndex - 1 : rotateBoxes.length - 1;
  rotateBox(rotateIndex);
});

document.querySelector('.right-btn').addEventListener('click', () => {
  rotateIndex = (rotateIndex < rotateBoxes.length - 1) ? rotateIndex + 1 : 0;
  rotateBox(rotateIndex);
});

// Initialize
rotateBox(rotateIndex);
