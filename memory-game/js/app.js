// identify cards array
let card = document.getElementsByClassName("card");
let cards = [...card];

// identify deck for all cards
const deck = document.getElementsByClassName("deck");

// identify move variable
let moves = 0;
let counter = document.querySelector(".moves");

// identify variables for star icons
const stars = document.querySelectorAll(".fa-star");
// identify stars list
let starsList = document.querySelectorAll(".stars li");

// identify variable of matchedCards
let matchedCard = document.getElementsByClassName("match");

// identify close icon in modal
 let closeicon = document.querySelector(".close");

// identify array for opened cards
var openedCards = [];


// toggles open and show class to display cards
var displayCard = function (){
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
};

// loop to add event listeners to each card
for (var i = 0; i < cards.length; i++){
    card = cards[i];
    card.addEventListener("click", displayCard);
    //card.addEventListener("click", cardOpen);
    //card.addEventListener("click",congratulations);
};



// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
