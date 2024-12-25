let fadeIndex = 0;
const fadeBoxes = document.querySelectorAll('.small-box');

// Function to highlight the current small box with fade effect
function highlightFadeBox(index) {
  fadeBoxes.forEach((box, i) => {
    box.classList.toggle('active', i === index);
  });
}

// Left navigation button
document.querySelector('.left-btn').addEventListener('click', () => {
  fadeIndex = (fadeIndex > 0) ? fadeIndex - 1 : fadeBoxes.length - 1;
  highlightFadeBox(fadeIndex);
});

// Right navigation button
document.querySelector('.right-btn').addEventListener('click', () => {
  fadeIndex = (fadeIndex < fadeBoxes.length - 1) ? fadeIndex + 1 : 0;
  highlightFadeBox(fadeIndex);
});

// Initialize the first box as active
highlightFadeBox(fadeIndex);
