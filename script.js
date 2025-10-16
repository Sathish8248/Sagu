const pages = document.querySelectorAll('.page');
let currentPage = 0;
const heartsContainer = document.getElementById('hearts');

function showNextPage() {
  pages[currentPage].classList.remove('active');
  currentPage = (currentPage + 1) % pages.length;
  pages[currentPage].classList.add('active');
  createHearts();
}

document.getElementById('card').addEventListener('click', showNextPage);

function createHearts() {
  for(let i=0; i<15; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDuration = (2 + Math.random() * 2) + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => { heart.remove(); }, 3000);
  }
}
