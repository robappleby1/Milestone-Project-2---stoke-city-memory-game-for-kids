//constants.
const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span')
const playerLives = 6;

playerLivesCount.textContent = playerLives;

//cards created with images.
const getData = () => [

    {name: 'brown', img:'assets/images/jacob_brown.png'},
    {name: 'vrancic', img:'assets/images/mario_vrancic.jpeg'},
    {name: 'oneill', img:'assets/images/michael_oneill.jpeg'},
    {name: 'powell', img:'assets/images/nick_powell.jpeg'},
    {name: 'shawcross', img:'assets/images/jacob_ryan_shawcross.jpeg'},
    {name: 'clucas', img:'assets/images/sam_clucas.jpeg'},
    {name: 'ince', img:'assets/images/tom_ince.jpeg'},
    {name: 'campbell', img:'assets/images/tyrese_campbell.jpeg'},
    {name: 'shirts', img:'assets/images/stoke_shirts.jpeg'},

    {name: 'brown', img:'assets/images/jacob_brown.png'},
    {name: 'vrancic', img:'assets/images/mario_vrancic.jpeg'},
    {name: 'oneill', img:'assets/images/michael_oneill.jpeg'},
    {name: 'powell', img:'assets/images/nick_powell.jpeg'},
    {name: 'shawcross', img:'assets/images/jacob_ryan_shawcross.jpeg'},
    {name: 'clucas', img:'assets/images/sam_clucas.jpeg'},
    {name: 'ince', img:'assets/images/tom_ince.jpeg'},
    {name: 'campbell', img:'assets/images/tyrese_campbell.jpeg'},
    {name: 'shirts', img:'assets/images/stoke_shirts.jpeg'},

];

const randomize = () => {
    const cardData = getData();

    cardData.sort(() => Math.random() - 0.5)
    return cardData;
   
}

randomize();

//card generator
const cardGenerator = () => {
    cardData = randomize();


cardData.forEach(item => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = 'card';
    face.classList = 'face';
    back.classList = 'back';

    //attach the cards

section.appendChild(card);
card.appendChild(face);
card.appendChild(back);

});

};


cardGenerator();


  
