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
        this.discardPile = [];
    }

    playCard(index){
        const playedCard = this.hand[index]
        return playedCard
    }
    discard(suitInHand, index){
        const discard = suitInHand.splice(index, 1)
        this.discardPile.push(discard)
     }
}

class Ai extends Player {
    constructor(name, team){
        super(name,team);
        this.heartsInHand = []
        this.clubsInHand = []
        this.diamondsInHand = []
        this.spadesInHand = []
    }
    playAiCard(){
        // const randomNumber = Math.floor(Math.random() * Math.floor(13));
        const playedCard = this.hand[0] //for now cpu will choose first card  
        const discardCard = this.hand.splice(0, 1)
        this.discardPile += discardCard
        return playedCard
    }

    sortHand(){
        for(i=0; i < this.hand.length; i++){
            if(this.hand[i].Suit === "hearts"){
                let heart = this.hand[i]
                this.heartsInHand.push(heart)
            } else if (this.hand[i].Suit === "diamonds"){
                this.diamondsInHand.push(this.hand[i])
            } else if (this.hand[i].Suit === "clubs"){
                this.clubsInHand.push(this.hand[i])
            } else if (this.hand[i].Suit === "spades"){
                this.spadesInHand.push(this.hand[i])
            }
        }
    }

    computer1(){
        if(game.currentUserCard.Suit === "hearts"){
            for(i = 0; i < this.heartsInHand.length; i++){
                if(this.heartsInHand[i].Av > game.currentUserCard.Av){
                let winningHeart = this.heartsInHand[i]
                this.discard(this.heartsInHand, i)
                return winningHeart
                }
                }
            for(i = 0; i < this.heartsInHand.length; i++){
                if (this.heartsInHand[i].Suit === "hearts"){
                    let losingHeart = this.heartsInHand[i]
                    this.discard(this.heartsInHand, i)
                    return losingHeart
                } 
        }
            for(i = 0; i < this.spadesInHand.length; i++){
            if(this.heartsInHand <= 0){
            let spade = this.spadesInHand[i]
                this.discard(this.spadesInHand, i)
                return spade
            }
        }
    }
        if(game.currentUserCard.Suit === "clubs"){
            for(i = 0; i < this.clubsInHand.length; i++){
                if(this.clubsInHand[i].Av > game.currentUserCard.Av){
                    let winningClub = this.clubsInHand[i]
                    this.discard(this.clubsInHand, i)
                    return winningClub
                    } 
            }
            for(i = 0; i < this.clubsInHand.length; i++){
                if (this.clubsInHand[i].Suit === "clubs"){
                    let lossingClub = this.clubsInHand[i]
                    this.discard(this.clubsInHand, i)
                    return lossingClub
                } 
        }
            for(i = 0; i < this.spadesInHand.length; i++){
            if(this.clubsInHand.length <= 0 ){
            let spade = this.spadesInHand[i]
                this.discard(this.spadesInHand, i)
                return spade
            }
        }
        }
        if(game.currentUserCard.Suit === "diamonds"){
            for(i = 0; i < this.diamondsInHand.length; i++){
                if(this.diamondsInHand[i].Av > game.currentUserCard.Av){
                    let winningDiamond = this.diamondsInHand[i]
                    this.discard(this.diamondsInHand, i)
                    return winningDiamond
                } 
            }
            for(i = 0; i < this.diamondsInHand.length; i++){
                if (this.diamondsInHand[i].Suit === "diamonds"){
                    let losingDiamond = this.diamondsInHand[i]
                    this.discard(this.diamondsInHand, i)
                    return losingDiamond
                } 
        }
            for(i = 0; i < this.spadesInHand.length; i++){
            if(this.diamondsInHand.length <= 0 ){
            let spade = this.spadesInHand[i]
                this.discard(this.spadesInHand, i)
                return spade
            }
        }
        }
        if(game.currentUserCard.Suit === "spades"){
            for(i = 0; i < this.spadesInHand.length; i++){
                if(this.spadesInHand[i].Av > game.currentUserCard.Av){
                    let winningSpade = this.spadesInHand[i]
                    this.discard(this.spadesInHand, i)
                    return winningSpade
                } 
            }
            for(i = 0; i < this.spadesInHand.length; i++){
                if (this.spadesInHand[i].Suit === "spades"){
                    let losingSpade = this.spadesInHand[i]
                    this.discard(this.spadesInHand, i)
                    return losingSpade
                } else {
                    for(i = 0; i < this.heartsInHand.length; i++){
                    let heart = this.heartsInHand[i]
                    this.discard(this.heartsInHand, i)
                    return heart
                    }
            } 
        }
        }

    }

       computer2(){
        if(game.currentCpu1Card.Suit === "hearts"){
            for(i = 0; i < this.heartsInHand.length; i++){
                if(this.heartsInHand[i].Av > game.currentCpu1Card.Av){
                let winningHeart = this.heartsInHand[i]
                this.discard(this.heartsInHand, i)
                return winningHeart
                }
                }
            for(i = 0; i < this.heartsInHand.length; i++){
                if (this.heartsInHand[i].Suit === "hearts"){
                    let losingHeart = this.heartsInHand[i]
                    this.discard(this.heartsInHand, i)
                    return losingHeart
                }
        }
            for(i = 0; i < this.spadesInHand.length; i++){
            if(this.heartsInHand <= 0){
            let spade = this.spadesInHand[i]
                this.discard(this.spadesInHand, i)
                return spade
            }
        }
    }
        if(game.currentCpu1Card.Suit === "clubs"){
            for(i = 0; i < this.clubsInHand.length; i++){
                if(this.clubsInHand[i].Av > game.currentCpu1Card.Av){
                    let winningClub = this.clubsInHand[i]
                    this.discard(this.clubsInHand, i)
                    return winningClub
                    } 
            }
            for(i = 0; i < this.clubsInHand.length; i++){
                if (this.clubsInHand[i].Suit === "clubs"){
                    let lossingClub = this.clubsInHand[i]
                    this.discard(this.clubsInHand, i)
                    return lossingClub
                } 
        }
            for(i = 0; i < this.spadesInHand.length; i++){
            if(this.clubsInHand <= 0){
            let spade = this.spadesInHand[i]
                this.discard(this.spadesInHand, i)
                return spade
            }
        }
        }
        if(game.currentCpu1Card.Suit === "diamonds"){
            for(i = 0; i < this.diamondsInHand.length; i++){
                if(this.diamondsInHand[i].Av > game.currentCpu1Card.Av){
                    let winningDiamond = this.diamondsInHand[i]
                    this.discard(this.diamondsInHand, i)
                    return winningDiamond
                } 
            }
            for(i = 0; i < this.diamondsInHand.length; i++){
                if (this.diamondsInHand[i].Suit === "diamonds"){
                    let losingDiamond = this.diamondsInHand[i]
                    this.discard(this.diamondsInHand, i)
                    return losingDiamond
                } 
        }
            for(i = 0; i < this.spadesInHand.length; i++){
            if(this.diamondsInHand <= 0){
            let spade = this.spadesInHand[i]
                this.discard(this.spadesInHand, i)
                return spade
            }
        }
        }
        if(game.currentCpu1Card.Suit === "spades"){
            for(i = 0; i < this.spadesInHand.length; i++){
                if(this.spadesInHand[i].Av > game.currentCpu1Card.Av){
                    let winningSpade = this.spadesInHand[i]
                    this.discard(this.spadesInHand, i)
                    return winningSpade
                } 
            }
            for(i = 0; i < this.spadesInHand.length; i++){
                if (this.spadesInHand[i].Suit === "spades"){
                    let losingSpade = this.spadesInHand[i]
                    this.discard(this.spadesInHand, i)
                    return losingSpade
                } else {
                    for(i = 0; i < this.spadesInHand.length; i++){
                    let heart = this.heartsInHand[i]
                    this.discard(this.heartsInHand, i)
                    return heart
                    }
            } 
        }
        }

    }
    
    computer3(){
        if(game.currentTeammateCard.Suit === "hearts"){
            
            for(i = 0; i < this.heartsInHand.length; i++){
                if(this.heartsInHand[i].Av > game.currentTeammateCard.Av){
                let winningHeart = this.heartsInHand[i]
                this.discard(this.heartsInHand, i)
                return winningHeart
                }
                }
            for(i = 0; i < this.heartsInHand.length; i++){
                if (this.heartsInHand[i].Suit === "hearts"){
                    let losingHeart = this.heartsInHand[i]
                    this.discard(this.heartsInHand, i)
                    return losingHeart
                } 
        }
            for(i = 0; i < this.spadesInHand.length; i++){
            if(this.heartsInHand <= 0){
            let spade = this.spadesInHand[i]
                this.discard(this.spadesInHand, i)
                return spade
            }
        }
    }
        if(game.currentTeammateCard.Suit === "clubs"){
            for(i = 0; i < this.clubsInHand.length; i++){
                if(this.clubsInHand[i].Av > game.currentTeammateCard.Av){
                    let winningClub = this.clubsInHand[i]
                    this.discard(this.clubsInHand, i)
                    return winningClub
                    } 
            }
            for(i = 0; i < this.clubsInHand.length; i++){
                if (this.clubsInHand[i].Suit === "clubs"){
                    let lossingClub = this.clubsInHand[i]
                    this.discard(this.clubsInHand, i)
                    return lossingClub
                } 
        }
            for(i = 0; i < this.spadesInHand.length; i++){
            if(this.clubsInHand <= 0){
            let spade = this.spadesInHand[i]
                this.discard(this.spadesInHand, i)
                return spade
            }
        }
        }
        if(game.currentTeammateCard.Suit === "diamonds"){
            for(i = 0; i < this.diamondsInHand.length; i++){
                if(this.diamondsInHand[i].Av > game.currentTeammateCard.Av){
                    let winningDiamond = this.diamondsInHand[i]
                    this.discard(this.diamondsInHand, i)
                    return winningDiamond
                } 
            }
            for(i = 0; i < this.diamondsInHand.length; i++){
                if (this.diamondsInHand[i].Suit === "diamonds"){
                    let losingDiamond = this.diamondsInHand[i]
                    this.discard(this.diamondsInHand, i)
                    return losingDiamond
                } 
            } 
            for(i = 0; i < this.spadesInHand.length; i++){
                if(this.diamondsInHand <= 0){
                let spade = this.spadesInHand[i]
                    this.discard(this.spadesInHand, i)
                    return spade
                }
            }
        }
        if(game.currentTeammateCard.Suit === "spades"){
            for(i = 0; i < this.spadesInHand.length; i++){
                if(this.spadesInHand[i].Av > game.currentTeammateCard.Av){
                    let winningSpade = this.spadesInHand[i]
                    this.discard(this.spadesInHand, i)
                    return winningSpade
                } 
            }
            for(i = 0; i < this.spadesInHand.length; i++){
                if (this.spadesInHand[i].Suit === "spades"){
                    let losingSpade = this.spadesInHand[i]
                    this.discard(this.spadesInHand, i)
                    return losingSpade
                } else {
                    for(i = 0; i < this.heartsInHand.length; i++){
                    let heart = this.heartsInHand[i]
                    this.discard(this.heartsInHand, i)
                    return heart
                    }
            } 
        }
        }

    }
}


const TeamA = {
    score:  0

}

const TeamB = {
    score: 0
    
}

/*Deck*/
//Have an array of all the cards -property
//Av stands for actual value Dv stands for display value
const spades = [
    {"Dv": "2 of Spade", "Av": 2, "Suit": "spade"},
    {"Dv": "3 of Spade", "Av": 3, "Suit": "spade"},
    {"Dv": "4 of Spade", "Av": 4, "Suit": "spade"},
    {"Dv": "5 of Spade", "Av": 5, "Suit": "spade"},
    {"Dv": "6 of Spade", "Av": 6, "Suit": "spade"},
    {"Dv": "7 of Spade", "Av": 7, "Suit": "spade"},
    {"Dv": "8 of Spade", "Av": 8, "Suit": "spade"},
    {"Dv": "9 of Spade", "Av": 9, "Suit": "spade"},
    {"Dv": "10 of Spade", "Av": 10, "Suit": "spade"},
    {"Dv": "Jack of Spade", "Av": 11, "Suit": "spade"},
    {"Dv": "Queen of Spade", "Av": 12, "Suit": "spade"},
    {"Dv": "King of Spade", "Av": 13, "Suit": "spade"},
    {"Dv": "Ace of Spade", "Av": 14, "Suit": "spade"},
]

const diamonds = [
    {"Dv": "2 of Diamond", "Av": 2, "Suit": "diamond"},
    {"Dv": "3 of Diamond", "Av": 3, "Suit": "diamond"},
    {"Dv": "4 of Diamond", "Av": 4, "Suit": "diamond"},
    {"Dv": "5 of Diamond", "Av": 5, "Suit": "diamond"},
    {"Dv": "6 of Diamond", "Av": 6, "Suit": "diamond"},
    {"Dv": "7 of Diamond", "Av": 7, "Suit": "diamond"},
    {"Dv": "8 of Diamond", "Av": 8, "Suit": "diamond"},
    {"Dv": "9 of Diamond", "Av": 9, "Suit": "diamond"},
    {"Dv": "10 of Diamond", "Av": 10, "Suit": "diamond"},
    {"Dv": "Jack of Diamond", "Av": 11, "Suit": "diamond"},
    {"Dv": "Queen of Diamond", "Av": 12, "Suit": "diamond"},
    {"Dv": "King of Diamond", "Av": 13, "Suit": "diamond"},
    {"Dv": "Ace of Diamond", "Av": 14, "Suit": "diamond"},
]

const clubs = [
    {"Dv": "2 of Club", "Av": 2, "Suit": "club"},
    {"Dv": "3 of Club", "Av": 3, "Suit": "club"},
    {"Dv": "4 of Club", "Av": 4, "Suit": "club"},
    {"Dv": "5 of Club", "Av": 5, "Suit": "club"},
    {"Dv": "6 of Club", "Av": 6, "Suit": "club"},
    {"Dv": "7 of Club", "Av": 7, "Suit": "club"},
    {"Dv": "8 of Club", "Av": 8, "Suit": "club"},
    {"Dv": "9 of Club", "Av": 9, "Suit": "club"},
    {"Dv": "10 of Club", "Av": 10, "Suit": "club"},
    {"Dv": "Jack of Club", "Av": 11, "Suit": "club"},
    {"Dv": "Queen of Club", "Av": 12, "Suit": "club"},
    {"Dv": "King of Club", "Av": 13, "Suit": "club"},
    {"Dv": "Ace of Club", "Av": 14, "Suit": "club"},
]
const hearts = [
    {"Dv": "2 of Heart", "Av": 2, "Suit": "heart"},
    {"Dv": "3 of Heart", "Av": 3, "Suit": "heart"},
    {"Dv": "4 of Heart", "Av": 4, "Suit": "heart"},
    {"Dv": "5 of Heart", "Av": 5, "Suit": "heart"},
    {"Dv": "6 of Heart", "Av": 6, "Suit": "heart"},
    {"Dv": "7 of Heart", "Av": 7, "Suit": "heart"},
    {"Dv": "8 of Heart", "Av": 8, "Suit": "heart"},
    {"Dv": "9 of Heart", "Av": 9, "Suit": "heart"},
    {"Dv": "10 of Heart", "Av": 10, "Suit": "heart"},
    {"Dv": "Jack of Heart", "Av": 11, "Suit": "heart"},
    {"Dv": "Queen of Heart", "Av": 12, "Suit": "heart"},
    {"Dv": "King of Heart", "Av": 13, "Suit": "heart"},
    {"Dv": "Ace of Heart", "Av": 14, "Suit": "heart"},
]

const deck = {
    deck : [],
/**
 * @description Pulls all of the data out of the 4 card suit arrays and brings it into one array
 */
   /* generateDeck(){
        this.deck = []
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
    }, */
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
    },

    generateDeck() {
    this.deck = []
    const suits = ["clubs", "spades", "hearts", "diamonds"]
    suits.forEach((suit) => {
        for (let i = 2; i <= 14; i++){
            let cssClass = ""
            let cardDescription = ""
            if(i <= 9){
                cssClass = `${suit.charAt(0)}0${i}`
                cardDescription = `${i} of ${suit.charAt(0).toUpperCase()}${suit.slice(1)}`
            } else if (i === 10){
                cssClass = `${suit.charAt(0)}${i}`
                cardDescription = `${i} of ${suit.charAt(0).toUpperCase()}${suit.slice(1)}`
            } else if (i === 11){
                cssClass = `${suit.charAt(0)}J`
                cardDescription = `Jack of ${suit.charAt(0).toUpperCase()}${suit.slice(1)}`
            } else if (i === 12){
                cssClass = `${suit.charAt(0)}Q`
                cardDescription = `Queen of ${suit.charAt(0).toUpperCase()}${suit.slice(1)}`
            } else if (i === 13){
                cssClass = `${suit.charAt(0)}K`
                cardDescription = `King of ${suit.charAt(0).toUpperCase()}${suit.slice(1)}`
            } else if (i === 14){
                cssClass = `${suit.charAt(0)}A`
                cardDescription = `Ace of ${suit.charAt(0).toUpperCase()}${suit.slice(1)}`
            }
            const card = {
                Suit: suit,
                Av: i,
                cssClass: cssClass,
                Dv: cardDescription,
            }
            this.deck.push(card)
        }
    });
}
}


/*Game*/
//Start of game- deal out all cards to all four players - Method
//Compare the different values on each card to determine a winner - Method
// Keep track of points won - property
// 

const game = {
    currentUserCard:"",
    currentCpu1Card : "",
    currentTeammateCard : "",
    currentCpu2Card : "",

    start(){
        deck.generateDeck()
        deck.shuffleCards()
        game.dealCards()
        cpu1.sortHand()
        teammate.sortHand()
        cpu2.sortHand() 
    },

    playAHand(userCard){
        this.currentUserCard = user.playCard(0)
        console.log(this.currentUserCard)
        user.discard(user.hand, 0)
        this.currentCpu1Card = cpu1.computer1()
        console.log(this.currentCpu1Card)
        this.currentTeammateCard = teammate.computer2()
        console.log(this.currentTeammateCard)
        this.currentCpu2Card = cpu2.computer3()
        console.log(this.currentCpu2Card)
        this.determineWinner() 
    },

    determineWinner(){
        if(this.currentUserCard.Av > this.currentCpu1Card.Av && this.currentUserCard.Av >this.currentCpu2Card.Av || this.currentTeammateCard.Av > this.currentCpu1Card.Av && this.currentTeammateCard.Av > this.currentCpu2Card.Av){
            console.log("Team A wins the hand")
            TeamA.score++
        } else {
            console.log ("Team B wins the hand")
            TeamB.score++
        }
    },

    dealCards(){
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

}




const user = new Player("Don", "A")
const cpu1 = new Ai("CPU1", "B")
const teammate = new Ai("Teammate", "A")
const cpu2 = new Ai("CPU2", "B")


/*Dom Manipulation */
const CardTable = $(".playingCards ul.table")
console.log(CardTable)
CardTable.css("display", "none")

const test = function () {
    console.log("Testing one two three")
    $startButton.remove()
    $rulesButton.remove()
    CardTable.css("display", "block")
    game.start()
    for (i=0; i <user.hand.length; i++){
        const newDiv = $("<div />")
        newDiv.addClass(`card ${user.hand[i].cssClass}`)
        $("#playingCards__User").append(newDiv)

    }

    for (i=0; i <cpu1.hand.length; i++){
        const newDiv = $("<div />")
        newDiv.addClass(`card ${cpu1.hand[i].cssClass}`)
        $("#playingCards__Cpu1").append(newDiv)

    }
    // const $createCardUl = $('<ul class = "table">')
    // const $createLiUl = $('<li>')
    // const $cardDiv = $("div").eq(2);
    // $($createCardUl).append($createLiUl)
    // $($cardDiv).append($createCardUl)
}

const tryCard = function (userCard) {
    console.log("Working")
}

const rules = function () {
    const displayRules = window.alert("This game is a faceoff between two pairs of teams. Each teammate sits directly across from them. The goal of the game is to play a card that has the highest value over your opponents but if your teammate is already winning to not outbeat your teammate. The value of the deck is, in descending order, : A , K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3, 2. Whatever suit is first played must be maintained if the players have that suit. otherwise the player has the option to play any spade card in their hand to win the hand. Spades value follows the same values detailed earlier")
}



const $startButton = $("#start")
$startButton.on("click", test)
const $rulesButton = $("#rules")
$rulesButton.on("click", rules)
const $card = $(".card")
$card.on("click", tryCard)
console.log($card)