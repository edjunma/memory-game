const cards = document.querySelectorall('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.add('flip');
// the first click
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
// the second click
  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
  }, 1500);
}

cards.forEach(card => card.addEventListener('click', flipCard));
