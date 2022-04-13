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
    
clubCards.sort(() => 0.5 - Math.random());


const gameDisplay = document.querySelector('.game-grid')

const chosenCards = []

const cardsSelectedIds = []


function createBoard() {
    for (let i = 0; i < 16; i++) {
        const card = document.createElement("img")
        card.setAttribute('src', 'assets/images/card-back.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gameDisplay.append(card);
    }

}
createBoard()

function checkMatch() {
   const cards = document.querySelectorAll('img')

   console.log('check for match')
   if (cardsChosen[0] == cardsChosen[1]) {
    alert ('You found a match!')
    }
}

function flipCard() {
   const cardId = this.getAttribute('data-id')
  
   chosenCards.push(clubCards[cardId].name)
   cardsSelectedIds.push(cardId)
    console.log('chosenCards')
    console.log('cardsSelectedIds')


   this.setAttribute ('src', clubCards[cardId].img)
   if (chosenCards.length === 2) {
       setTimeout( checkMatch, 500)
   }
}