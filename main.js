const cards = document.querySelectorAll(".card")
let flippedCards = [];

cards.forEach((card) => card.addEventListener("click", flipCard))

function flipCard() {

this.classList.add("flipped")
    flippedCards.push(this);

    checkForMatch(
        flippedCards[0].dataset.cardValue,
        flippedCards[1].dataset.cardValue,
        
    );

}

function checkForMatch(cardValue1, cardValue2) {

    
    let card1 = flippedCards[0];
    let card2 = flippedCards[1];
    if (cardValue1 === cardValue2) {
      // Las cartas son iguales, las dejamos mostradas

        
        flippedCards = [];
    

    } else {

      // Las cartas no son iguales, las volvemos a ocultar
        setTimeout(() => {
        
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        flippedCards = [];
        

    }, 
    1500);
}
}