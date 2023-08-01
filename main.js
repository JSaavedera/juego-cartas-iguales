const cards = document.querySelectorAll(".card")
let flippedCards = [];

cards.forEach((card) => card.addEventListener("click", flipCard))
console.log(cards)

function flipCard() {
    this.classList.add("flipped")
}

