const cards = document.querySelectorall('.memory-card');

function flipCard() {
  this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));
