document.addEventListener('DOMContentLoaded', () => {

  //Variables using const  for the values that will not change.
  const gameDisplay = document.querySelector('.game-grid');
  const scoreDisplay = document.getElementById('score-display');
  const attemptDisplay = document.getElementById('attempt-display');
  const playAgain = document.getElementById ('replay');
  const replayButton = document.getElementById('replay-button');
  const successOverlay = document.getElementById('success');
  const successOverlayClose = document.getElementById ('replay');

  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];
  let attempt = 0;

  //Array of images for the cards.
  const clubCards = [{
      name: "brown",
      img: "assets/images/brown.png"
    },
    {
      name: "vrancic",
      img: "assets/images/mario_vrancic.jpeg"
    },
    {
      name: "oneill",
      img: "assets/images/michael_oneill.jpeg"
    },
    {
      name: "powell",
      img: "assets/images/nick_powell.jpeg"
    },
    {
      name: "shawcross",
      img: "assets/images/ryan_shawcross.jpeg"
    },
    {
      name: "clucas",
      img: "assets/images/sam_clucas.jpeg"
    },
    {
      name: "ince",
      img: "assets/images/tom_ince.jpeg"
    },
    {
      name: "campbell",
      img: "assets/images/tyrese_campbell.jpeg"
    },
    {
      name: "brown",
      img: "assets/images/brown.png"
    },
    {
      name: "vrancic",
      img: "assets/images/mario_vrancic.jpeg"
    },
    {
      name: "oneill",
      img: "assets/images/michael_oneill.jpeg"
    },
    {
      name: "powell",
      img: "assets/images/nick_powell.jpeg"
    },
    {
      name: "shawcross",
      img: "assets/images/ryan_shawcross.jpeg"
    },
    {
      name: "clucas",
      img: "assets/images/sam_clucas.jpeg"
    },
    {
      name: "ince",
      img: "assets/images/tom_ince.jpeg"
    },
    {
      name: "campbell",
      img: "assets/images/tyrese_campbell.jpeg"
    },

  ];

  //Shuffle function to randomise the order of the cards.
  function shuffle() {
    clubCards.sort(() => 0.5 - Math.random());
  }

  shuffle();

      //function to create the game, to loop through the array of cards and add event listeners.
      function createBoard() {
      for (let i = 0; i < clubCards.length; i++) {
      const card = document.createElement("img");
      card.setAttribute('src', 'assets/images/card_back.png');
      card.setAttribute('alt', 'player-images');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      gameDisplay.appendChild(card);
    }

  }

  //function to flip cards and swap club crest with images in card array.
  function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(clubCards[cardId].name);
    cardsChosenId.push(cardId);

    this.setAttribute('src', clubCards[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 750);
    }

  }

  //function to check for a match after selecting two cards.
  function checkForMatch() {
    const cards = document.querySelectorAll(".game-grid img");
    const firstCard = cardsChosenId[0];
    const secondCard = cardsChosenId[1];

    if (cardsChosen[0] === cardsChosen[1] && firstCard !== secondCard) {
      cards[firstCard].setAttribute('src', 'assets/images/matched_card.png');
      cards[secondCard].setAttribute('src', 'assets/images/matched_card.png');
      cards[firstCard].removeEventListener('click', flipCard);
      cards[secondCard].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
      setTimeout(success, 500);
    } else {
      cards[firstCard].setAttribute('src', 'assets/images/card_back.png');
      cards[secondCard].setAttribute('src', 'assets/images/card_back.png');
    }
    cardsChosen = [];
    cardsChosenId = [];
    attempt += 1;
    attemptDisplay.innerHTML = attempt;
    

    scoreDisplay.textContent = cardsWon.length;

    //alert to signify the completion of the game after matching all cards.
     function success () {
      if (cardsWon.length == clubCards.length/2) {
        successOverlay.classList.add('show');
       }
    
    }
    }


  //function to replay the game and reset counters to zero.
  function replay() {
    gameDisplay.innerHTML = "";
    shuffle();
    createBoard();
    cardsWon = 0;
    attempt = 0;
    attemptDisplay.innerHTML = 0;
    scoreDisplay.innerHTML = 0;
  }

    replayButton.addEventListener('click', () => {
    replayGame();
  });

  function replayGame() {
    successOverlay.classList.remove('show');
    replay();
  }

  createBoard();
  shuffle();
  playAgain.addEventListener("click", replay);
  successOverlayClose.addEventListener ('click', replayGame);
  

});

