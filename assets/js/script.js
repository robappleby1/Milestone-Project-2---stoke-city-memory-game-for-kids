document.addEventListener('DOMContentLoaded', () => {


const clubCards = [
    {name: "brown", img: "assets/images/brown.png"},
    {name: "vrancic", img: "assets/images/mario_vrancic.jpeg"},
    {name: "oneill", img: "assets/images/michael_oneill.jpeg"},
    {name: "powell", img: "assets/images/nick_powell.jpeg"},
    {name: "shawcross", img: "assets/images/ryan_shawcross.jpeg"},
    {name: "clucas", img: "assets/images/sam_clucas.jpeg"},
    {name: "ince", img: "assets/images/tom_ince.jpeg"},
    {name: "campbell", img: "assets/images/tyrese_campbell.jpeg"},
    {name: "brown", img: "assets/images/brown.png"},
    {name: "vrancic", img: "assets/images/mario_vrancic.jpeg"},
    {name: "oneill", img: "assets/images/michael_oneill.jpeg"},
    {name: "powell", img: "assets/images/nick_powell.jpeg"},
    {name: "shawcross", img: "assets/images/ryan_shawcross.jpeg"},
    {name: "clucas", img: "assets/images/sam_clucas.jpeg"},
    {name: "ince", img: "assets/images/tom_ince.jpeg"},
    {name: "campbell", img: "assets/images/tyrese_campbell.jpeg"},
    
]
    function shuffleCards() {
        clubCards.sort(() => 0.5 - Math.random());
    }
        

const gameDisplay = document.querySelector('.game-grid')
const scoreDisplay = document.getElementById('score-display')
const attemptDisplay = document.getElementById('attempt-display')
const playAgain = document.getElementById('replay')

let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = []   
let attempt = 0;





function createBoard() {
    for (let i = 0; i < clubCards.length; i++) {
        const card = document.createElement("img")
        card.setAttribute('src', 'assets/images/card-back.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gameDisplay.appendChild(card);
    }

}


function checkForMatch() {
const cards = document.querySelectorAll(".game-grid img");
const firstCard = cardsChosenId[0]
const secondCard = cardsChosenId[1]
    
   
    if (cardsChosen[0] === cardsChosen[1]) {
      cards[firstCard].setAttribute('src', 'assets/images/matched-card.png')
      cards[secondCard].setAttribute('src', 'assets/images/matched-card.png')
      cards[firstCard].removeEventListener('click', flipCard)
      cards[secondCard].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[firstCard].setAttribute('src', 'assets/images/card-back.png')
      cards[secondCard].setAttribute('src', 'assets/images/card-back.png')
    }
    cardsChosen = []
    cardsChosenId = [] 
    attempt += 1;
    attemptDisplay.innerHTML = attempt;

    scoreDisplay.textContent = cardsWon.length


    function replay() {
            gameGrid.innerHTML = ""
            shuffleCards()
            createBoard()
            cardsWon = 0;
            attempt = 0;
            attemptDisplay.innerHTML = 0;
            matchDisplay.innerHTML = 0
    }


    if  (cardsWon.length === clubCards.length/2) {
      scoreDisplay.textContent = 'Congratulations! You found them all!'
    }
  }


function flipCard() {
let cardId = this.getAttribute('data-id')
cardsChosen.push(clubCards[cardId].name)
cardsChosenId.push(cardId)

this.setAttribute('src', clubCards[cardId].img)
if (cardsChosen.length === 2) {
setTimeout (checkForMatch, 750)
    }

   }

createBoard()

})
