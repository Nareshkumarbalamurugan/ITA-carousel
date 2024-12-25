let zoomIndex = 0;
const zoomBoxes = document.querySelectorAll('.small-box');

function highlightZoomBox(index) {
  zoomBoxes.forEach((box, i) => {
    box.classList.toggle('active', i === index);
  });
}

document.querySelector('.left-btn').addEventListener('click', () => {
  zoomIndex = (zoomIndex > 0) ? zoomIndex - 1 : zoomBoxes.length - 1;
  highlightZoomBox(zoomIndex);
});

document.querySelector('.right-btn').addEventListener('click', () => {
  zoomIndex = (zoomIndex < zoomBoxes.length - 1) ? zoomIndex + 1 : 0;
  highlightZoomBox(zoomIndex);
});

// Initialize
highlightZoomBox(zoomIndex);
