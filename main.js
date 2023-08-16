const cards = document.querySelectorAll(".card");
const game = document.getElementById("game");
const select = document.getElementById("card-count");
let flippedCards = [];

function createCard(cardValue, frontFaceImage, backFaceImage) {
  // Creamos el elemento de la carta

  let card = document.createElement("div");
  card.classList.add("card");
  card.dataset.cardValue = cardValue;
  console.log("Creando carta con valor:", cardValue);

  // Creamos la imagen de la cara de atrás de la carta
  let backFace = document.createElement("img");
  backFace.classList.add("back-face");
  backFace.src = backFaceImage;

  // Creamos la imagen de la cara delantera de la carta
  let frontFace = document.createElement("img");
  frontFace.classList.add("front-face");
  frontFace.src = frontFaceImage;

  // Agregamos las imágenes a la carta y devolvemos la carta
  card.appendChild(backFace);
  card.appendChild(frontFace);
  return card;
}

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
