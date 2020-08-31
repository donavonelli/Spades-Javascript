// Sanity Check
console.log("Works")
// PsuedoCode

/*Player*/
//Look at cards in their hand - property
//play a card - Method
//Keep track of points they have earned - property

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
const Deck = {
    deck : [],

    generateDeck(){
        for(let i = 0; i <= spades.length; i++){
            this.deck.push(spades[i])
        }
    }
}

/*Game*/
//Start of game- deal out all cards to all four players - Method
//Compare the different values on each card to determine a winner - Method
// Keep track of points won - property
// 