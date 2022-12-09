const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel img");
const next = document.querySelector(".next");
const previous = document.querySelector(".prev");
let currentActive = 0;

let imageInterval = setInterval(() => {
  nextImage();
}, 2000);

previous.addEventListener("click", () => {
  prevImage();
  resetInterval();
});

next.addEventListener("click", () => {
  nextImage();
  resetInterval();
});

function nextImage() {
  currentActive++;
  if (currentActive > images.length - 1) {
    currentActive = 0;
  }
  carousel.style.cssText = `translate: -${currentActive * 100}%`;
}

function prevImage() {
  currentActive--;
  if (currentActive < 0) {
    currentActive = images.length - 1;
  }
  carousel.style.cssText = `translate: -${currentActive * 100}%`;
}

function resetInterval() {
  clearInterval(imageInterval);
  imageInterval = setInterval(() => {
    nextImage();
  }, 2000);
}
