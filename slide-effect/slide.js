let slideIndex = 0;

document.querySelector('.left-btn').addEventListener('click', () => {
  const smallBoxes = document.querySelector('.small-boxes');
  slideIndex = (slideIndex > 0) ? slideIndex - 1 : 2;
  smallBoxes.style.transform = `translateX(-${slideIndex * 90}px)`;
});

document.querySelector('.right-btn').addEventListener('click', () => {
  const smallBoxes = document.querySelector('.small-boxes');
  slideIndex = (slideIndex < 2) ? slideIndex + 1 : 0;
  smallBoxes.style.transform = `translateX(-${slideIndex * 90}px)`;
});
