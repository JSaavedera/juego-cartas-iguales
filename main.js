const cards = document.querySelectorAll(".card");
const game = document.getElementById("game");
const select = document.getElementById("card-count");
let flippedCards = [];

cards.forEach((card123) => card123.addEventListener("click", flipCard));



function flipCard() {



  this.classList.add("flipped");
  flippedCards.push(this);



  checkForMatch(
    flippedCards[0].dataset.cardValue,

    flippedCards[1].dataset.cardValue
  );
}

function checkForMatch(cardValue1, cardValue2) {
  console.log("ejecutando checkForMatch");

  let card1 = flippedCards[0];
  console.log("Contenido de card1:", card1);
  let card2 = flippedCards[1];

  if (cardValue1 === cardValue2) {
    // Las cartas son iguales, las dejamos mostradas
    console.log("las cartas son iguales");

    flippedCards = [];
  } else {
    // Las cartas no son iguales, las volvemos a ocultar
    setTimeout(() => {
      console.log("eliminando clase flipped");
      card1.classList.remove("flipped");
      card2.classList.remove("flipped");
      flippedCards = [];
    }, 1500);
  }
}


