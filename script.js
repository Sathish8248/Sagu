const pages = document.querySelectorAll('.page');
let currentPage = 0;
const heartsContainer = document.getElementById('hearts');

const lines = document.querySelectorAll('.line');
let lineIndex = 0;

function showNextPage() {
  pages[currentPage].classList.remove('active');
  currentPage = (currentPage + 1) % pages.length;
  pages[currentPage].classList.add('active');

  createHearts();
  animateLines();
}

document.getElementById('card').addEventListener('click', showNextPage);

// Animate lines one by one
function animateLines() {
  lineIndex = 0;
