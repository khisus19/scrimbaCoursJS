let player = {name: "Player", chips: 200}
let firstCard;
let secondCard;
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if (randomCard === 1) {
        randomCard = 11;
    } else if (randomCard > 10){
        randomCard = 10;
    }
    return randomCard;
}

function startGame(){
    if (isAlive == false || sum === 21){
        isAlive = true;
        cards = [];
        sum = 0;
        firstCard = newCard();
        secondCard = newCard();
        runGame();
    }
}

function runGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " / ";
    }

    sumEl.textContent = `Sum: ${sum}`;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive && sum < 21){
        let newCard = getRandomCard();
        sum += newCard;
        cards.push(newCard);
        runGame();
    } else {
        messageEl.textContent = `You can't draw more cards`;
    }
}