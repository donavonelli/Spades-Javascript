// Sanity Check
console.log("Works")
// PsuedoCode

/*Player*/
//Look at cards in their hand - property
//play a card - Method
//Keep track of points they have earned - property

class Player {
    constructor(name, team){
        this.name = name;
        this.team = team;
        this.points = 0;
        this.hand = [];
    }

    playCard(index){
        const playedCard = this.hand[index]
        game.playAHand()
    }
}



/*Deck*/
//Have an array of all the cards -property
//Av stands for actual value Dv stands for display value
const spades = [
    {"Dv": "2 of Spade", "Av": 2},
    {"Dv": "3 of Spade", "Av": 3},
    {"Dv": "4 of Spade", "Av": 4},
    {"Dv": "5 of Spade", "Av": 5},
    {"Dv": "6 of Spade", "Av": 6},
    {"Dv": "7 of Spade", "Av": 7},
    {"Dv": "8 of Spade", "Av": 8},
    {"Dv": "9 of Spade", "Av": 9},
    {"Dv": "10 of Spade", "Av": 10},
    {"Dv": "Jack of Spade", "Av": 11},
    {"Dv": "Queen of Spade", "Av": 12},
    {"Dv": "King of Spade", "Av": 13},
    {"Dv": "Ace of Spade", "Av": 14},
]

const diamonds = [
    {"Dv": "2 of Diamond", "Av": 2},
    {"Dv": "3 of Diamond", "Av": 3},
    {"Dv": "4 of Diamond", "Av": 4},
    {"Dv": "5 of Diamond", "Av": 5},
    {"Dv": "6 of Diamond", "Av": 6},
    {"Dv": "7 of Diamond", "Av": 7},
    {"Dv": "8 of Diamond", "Av": 8},
    {"Dv": "9 of Diamond", "Av": 9},
    {"Dv": "10 of Diamond", "Av": 10},
    {"Dv": "Jack of Diamond", "Av": 11},
    {"Dv": "Queen of Diamond", "Av": 12},
    {"Dv": "King of Diamond", "Av": 13},
    {"Dv": "Ace of Diamond", "Av": 14},
]

const clubs = [
    {"Dv": "2 of Club", "Av": 2},
    {"Dv": "3 of Club", "Av": 3},
    {"Dv": "4 of Club", "Av": 4},
    {"Dv": "5 of Club", "Av": 5},
    {"Dv": "6 of Club", "Av": 6},
    {"Dv": "7 of Club", "Av": 7},
    {"Dv": "8 of Club", "Av": 8},
    {"Dv": "9 of Club", "Av": 9},
    {"Dv": "10 of Club", "Av": 10},
    {"Dv": "Jack of Club", "Av": 11},
    {"Dv": "Queen of Club", "Av": 12},
    {"Dv": "King of Club", "Av": 13},
    {"Dv": "Ace of Club", "Av": 14},
]

const hearts = [
    {"Dv": "2 of Heart", "Av": 2},
    {"Dv": "3 of Heart", "Av": 3},
    {"Dv": "4 of Heart", "Av": 4},
    {"Dv": "5 of Heart", "Av": 5},
    {"Dv": "6 of Heart", "Av": 6},
    {"Dv": "7 of Heart", "Av": 7},
    {"Dv": "8 of Heart", "Av": 8},
    {"Dv": "9 of Heart", "Av": 9},
    {"Dv": "10 of Heart", "Av": 10},
    {"Dv": "Jack of Heart", "Av": 11},
    {"Dv": "Queen of Heart", "Av": 12},
    {"Dv": "King of Heart", "Av": 13},
    {"Dv": "Ace of Heart", "Av": 14},
]
const deck = {
    deck : [],
/**
 * @description Pulls all of the data out of the 4 card suit arrays and brings it into one array
 */
    generateDeck(){
        for(let i = 0; i < spades.length; i++){
            this.deck.push(spades[i])
        }
        for(let i = 0; i < diamonds.length; i++){
            this.deck.push(diamonds[i])
        }
        for(let i = 0; i < clubs.length; i++){
            this.deck.push(clubs[i])
        }
        for(let i = 0; i < hearts.length; i++){
            this.deck.push(hearts[i])
        }
    },
/**
 * @author Dalton
 * @description shuffles the cards in the deck
 */
    shuffleCards(){
        let length = this.deck.length;
    let element;
    let index;
    while (length) {
      index = Math.floor(Math.random() * length--);
      element = this.deck[length];
      this.deck[length] = this.deck[index];
      this.deck[index] = element;
    }
    }
}


/*Game*/
//Start of game- deal out all cards to all four players - Method
//Compare the different values on each card to determine a winner - Method
// Keep track of points won - property
// 

const game = {
    start(){
        deck.generateDeck()
        deck.shuffleCards()
        for(i=1; i <=13; i++){
            const drawnCard = deck.deck.shift()
            const drawnCard2 = deck.deck.shift()
            const drawnCard3 = deck.deck.shift()
            const drawnCard4 = deck.deck.shift()
            user.hand.push(drawnCard)
            cpu1.hand.push(drawnCard2)
            teammate.hand.push(drawnCard3)
            cpu2.hand.push(drawnCard4)
        }
    },

    playAHand(){

    }
}




const user = new Player("Don", "A")
const cpu1 = new Player("CPU1", "B")
const teammate = new Player("Teammate", "A")
const cpu2 = new Player("CPU2", "B")