// Sanity Check
// PsuedoCode

/*Player*/
//Look at cards in their hand - property
//play a card - Method
//Keep track of points they have earned - property


/**
 * @class
 * @description Class that each player is built from
 */
class Player {
    constructor(name, team){
        this.name = name;
        this.team = team;
        this.points = 0;
        this.hand = [];
        this.discardPile = [];
    }
    /**
    * @method
    * @description returns a card object in players hand
    */
    playCard(index){
        const playedCard = this.hand[index]
        return playedCard
    }
    /**
     * @method
     * @description discards the played card out of the players hand
     */
    discard(suitInHand, index){
        const test = suitInHand.map(c=>c) 
        const discard = suitInHand.splice(index, 1)
        this.discardPile.push(discard)
     }
     /**
      * @method
      * @description assists in DOM manipulation for picking a card on screen
      * @param {index of the card} id 
      */
    getCardById(id){
        return this.hand[id]
    } 
     /**
      * @method
      * @description assists in DOM manipulation for picking a card on screen
      * @param {index of the card} id 
      */
    getCardByClass(cssClass){
        return this.hand.find(card => card.cssClass === cssClass)
    }
}
/**
 * @class
 * @extends Player
 * @description Used to determine Ai behavior in the card game
 */
class Ai extends Player {
    constructor(name, team){
        super(name,team);
        this.heartsInHand = []
        this.clubsInHand = []
        this.diamondsInHand = []
        this.spadesInHand = []
    }

/**
 * @method
 * @description function that sorts each Ai's hand into their respective suits making it easier to apply logic to them
 */
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

/**
 * @method
 * @description dictates computers 1 logic playing off of the user
 */
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
            for(i = 0; i < this.clubsInHand.length; i++){
            if(this.spadesInHand.length <= 0 ){
            let club = this.clubsInHand[i]
                this.discard(this.clubsInHand, i)
                return club
            }
        }
            for(i = 0; i < this.diamondsInHand.length; i++){
            if(this.clubsInHand.length <= 0 ){
            let diamond = this.diamondsInHand[i]
                this.discard(this.diamondsInHand, i)
                return diamond
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
            for(i = 0; i < this.heartsInHand.length; i++){
                if(this.spadesInHand.length <= 0 ){
                let heart = this.heartsInHand[i]
                this.discard(this.heartsInHand, i)
                return heart
            }
        }

            for(i = 0; i < this.diamondsInHand.length; i++){
            if(this.heartsInHand.length <= 0 ){
            let diamond = this.diamondsInHand[i]
                this.discard(this.diamondsInHand, i)
                return diamond
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
        for(i = 0; i < this.heartsInHand.length; i++){
                if(this.spadesInHand.length <= 0 ){
                let heart = this.heartsInHand[i]
                this.discard(this.heartsInHand, i)
                return heart
            }
        }
            for(i = 0; i < this.clubsInHand.length; i++){
            if(this.heartsInHand.length <= 0 ){
            let club = this.clubsInHand[i]
                this.discard(this.clubsInHand, i)
                return club
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
                } 
        }
            for(i = 0; i < this.heartsInHand.length; i++){
                if(this.spadesInHand.length <= 0 ){
                let heart = this.heartsInHand[i]
                this.discard(this.heartsInHand, i)
                return heart
            }
        }
            for(i = 0; i < this.clubsInHand.length; i++){
            if(this.heartsInHand.length <= 0 ){
            let club = this.clubsInHand[i]
                this.discard(this.clubsInHand, i)
                return club
            }
        }
            for(i = 0; i < this.diamondsInHand.length; i++){
            if(this.clubsInHand.length <= 0 ){
            let diamond = this.diamondsInHand[i]
                this.discard(this.diamondsInHand, i)
                return diamond
            }
        }
        }

    }
/**
 * @method
 * @description dictates teammates logic playing off of computer 1
 */
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
            for(i = 0; i < this.clubsInHand.length; i++){
            if(this.spadesInHand.length <= 0 ){
            let club = this.clubsInHand[i]
                this.discard(this.clubsInHand, i)
                return club
            }
        }
            for(i = 0; i < this.diamondsInHand.length; i++){
            if(this.clubsInHand.length <= 0 ){
            let diamond = this.diamondsInHand[i]
                this.discard(this.diamondsInHand, i)
                return diamond
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
            for(i = 0; i < this.heartsInHand.length; i++){
                if(this.spadesInHand.length <= 0 ){
                let heart = this.heartsInHand[i]
                this.discard(this.heartsInHand, i)
                return heart
            }
        }

            for(i = 0; i < this.diamondsInHand.length; i++){
            if(this.clubsInHand.length <= 0 ){
            let diamond = this.diamondsInHand[i]
                this.discard(this.diamondsInHand, i)
                return diamond
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
            for(i = 0; i < this.heartsInHand.length; i++){
                if(this.spadesInHand.length <= 0 ){
                let heart = this.heartsInHand[i]
                this.discard(this.heartsInHand, i)
                return heart
            }
        }
            for(i = 0; i < this.clubsInHand.length; i++){
            if(this.heartsInHand.length <= 0 ){
            let club = this.clubsInHand[i]
                this.discard(this.clubsInHand, i)
                return club
            }
        }
            for(i = 0; i < this.diamondsInHand.length; i++){
            if(this.clubsesInHand.length <= 0 ){
            let diamond = this.diamondsInHand[i]
                this.discard(this.diamondsInHand, i)
                return diamond
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
                } 
        }
            for(i = 0; i < this.heartsInHand.length; i++){
            if(this.clubsInHand.length <= 0 ){
            let heart = this.heartsInHand[i]
                this.discard(this.heartsInHand, i)
                return heart
            }
        }
            for(i = 0; i < this.clubsInHand.length; i++){
            if(this.heartsInHand.length <= 0 ){
            let club = this.clubsInHand[i]
                this.discard(this.clubsInHand, i)
                return club
            }
        }
            for(i = 0; i < this.diamondsInHand.length; i++){
            if(this.clubsInHand.length <= 0 ){
            let diamond = this.diamondsInHand[i]
                this.discard(this.diamondsInHand, i)
                return diamond
            }
        }
        }

    }
/**
 * @method
 * @description dictates computers 2 logic playing off of teammate
 */
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
            for(i = 0; i < this.clubsInHand.length; i++){
            if(this.heartsInHand.length <= 0 ){
            let club = this.clubsInHand[i]
                this.discard(this.clubsInHand, i)
                return club
            }
        }
            for(i = 0; i < this.diamondsInHand.length; i++){
            if(this.clubsInHand.length <= 0 ){
            let diamond = this.diamondsInHand[i]
                this.discard(this.diamondsInHand, i)
                return diamond
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
            for(i = 0; i < this.heartsInHand.length; i++){
                if(this.spadesInHand.length <= 0 ){
                let heart = this.heartsInHand[i]
                this.discard(this.heartsInHand, i)
                return heart
            }
        }
            for(i = 0; i < this.diamondsInHand.length; i++){
            if(this.spadesInHand.length <= 0 ){
            let diamond = this.diamondsInHand[i]
                this.discard(this.diamondsInHand, i)
                return diamond
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
            for(i = 0; i < this.heartsInHand.length; i++){
                if(this.spadesInHand.length <= 0 ){
                let heart = this.heartsInHand[i]
                this.discard(this.heartsInHand, i)
                return heart
            }
        }
            for(i = 0; i < this.clubsInHand.length; i++){
            if(this.heartsInHand.length <= 0 ){
            let club = this.clubsInHand[i]
                this.discard(this.clubsInHand, i)
                return club
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
                }
        }
            for(i = 0; i < this.heartsInHand.length; i++){
            if(this.heartsInHand.length <= 0 ){
            let heart = this.heartsInHand[i]
                this.discard(this.heartsInHand, i)
                return heart
            }
        }
            for(i = 0; i < this.clubsInHand.length; i++){
            if(this.heartsInHand.length <= 0 ){
            let club = this.clubsInHand[i]
                this.discard(this.clubsInHand, i)
                return club
            }
        }
            for(i = 0; i < this.diamondsInHand.length; i++){
            if(this.clubsInHand.length <= 0 ){
            let diamond = this.diamondsInHand[i]
                this.discard(this.diamondsInHand, i)
                return diamond
            }
        }
        }

    }
}

/**
 * @description Keeps track of the user's team points
 */
const TeamA = {
    score:  0

}

/**
 * @description Keeps track of the opposing team points
 */
const TeamB = {
    score: 0
    
}

/*Deck*/
//Have an array of all the cards -property
//Av stands for actual value Dv stands for display value


const deck = {
    deck : [],

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


    /**
     * @function
     * @description generates the deck dynamicaly, assigning a each card a number value, a suit, a css class, and a card description
     */
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


/**
 * @description game object that holds all functions and objects pertaining to the game. This includes starting the game, fixing the spade values and playing a hand
 */
const game = {
    currentUserCard:"",
    currentCpu1Card : "",
    currentTeammateCard : "",
    currentCpu2Card : "",

    start(){
        deck.generateDeck()
        game.fixSpadesValues()
        deck.shuffleCards()
        game.dealCards()
        cpu1.sortHand()
        teammate.sortHand()
        cpu2.sortHand() 
    },

    playAHand(userCard, index){
        this.currentUserCard = userCard;
        console.log(this.currentUserCard)
        user.discard(user.hand, index)
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
            $("#teamAScore").text(`Team A: ${TeamA.score}`)
        } else {
            console.log ("Team B wins the hand")
            TeamB.score++
            $("#teamBScore").text(`Team B: ${TeamB.score}`)
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

    fixSpadesValues(){
        for (i=0;i < deck.deck.length; i++){
            if(deck.deck[i].Suit === "spades"){
                deck.deck[i].Av += 13 
            }
        }
    }

}



/**
 * @description Builds each player from their respective Player and Ai Classes
 */
const user = new Player("Don", "A")
const cpu1 = new Ai("CPU1", "B")
const teammate = new Ai("Teammate", "A")
const cpu2 = new Ai("CPU2", "B")


/*Dom Manipulation */


const CardTable = $(".playingCards ul.table")
CardTable.css("display", "none")

/**
 * @function
 * @description This gives functionality to the start button, removing the buttons and logo from the screen, and generating and dealing out the each players cards
 */
const test = function () {
    console.log("Testing one two three")
    $startButton.remove()
    $rulesButton.remove()
    $logo.remove()
    $container.remove()
    CardTable.css("display", "block")
    game.start()
    const $cpu1Img = $(`<img class = Cpu1 src = "./assets/Cpu1.png"/>`)
    const $cpuContainer1 = $("#playingCards__Cpu1")
    $cpuContainer1.append($cpu1Img)
    const $teammateImg = $(`<img class = Teammate src = "./assets/Alien.png"/>`)
    const $teammateContainer = $("#playingCards__Teammate")
    $teammateContainer.append($teammateImg)
    const $cpu2Img = $(`<img class = Cpu2 src = "./assets/Cpu2.png"/>`)
    const $cpuContainer2 = $("#playingCards__Cpu2")
    $cpuContainer2.append($cpu2Img)
    const $scoreA = TeamA.score;
    const $scoreB = TeamB.score;
    $("#score").append(`<h1 id = teamAScore>Team A: ${$scoreA} `)
    $("#score").append(`<h1 id = teamBScore>Team B: ${$scoreB} `)
    for (i=0; i <user.hand.length; i++){
        const newDiv = $("<div />")
        newDiv.addClass(`card ${user.hand[i].cssClass}`)
        newDiv.attr("id", `${i}`)
        newDiv.on("click", tryCard)
        $("#playingCards__User").append(newDiv)
        

    }

    for (i=0; i <cpu1.hand.length; i++){
        const newDiv = $("<div />")
        newDiv.addClass(`card ${cpu1.hand[i].cssClass}`)
        newDiv.css("position", "absolute")
        newDiv.css("top", "150px")
        // newDiv.css("bottom", "0px")
        newDiv.css("left", "0px")
        $("#playingCards__Cpu1").prepend(newDiv)

    }

    for (i=0; i <teammate.hand.length; i++){
        const newDiv = $("<div />")
        newDiv.addClass(`card ${teammate.hand[i].cssClass}`)
        newDiv.css("position", "absolute")
        newDiv.css("top", "10px")
        // newDiv.css("bottom", "0px")
        newDiv.css("left", "600px")
        $("#playingCards__Teammate").prepend(newDiv)


    }

    for (i=0; i <cpu2.hand.length; i++){
        const newDiv = $("<div />")
        newDiv.addClass(`card ${cpu2.hand[i].cssClass}`)
        newDiv.css("position", "absolute")
        newDiv.css("top", "150px")
        // newDiv.css("bottom", "0px")
        newDiv.css("right", "125px")
        $("#playingCards__Cpu2").prepend(newDiv)

    }
    // const $createCardUl = $('<ul class = "table">')
    // const $createLiUl = $('<li>')
    // const $cardDiv = $("div").eq(2);
    // $($createCardUl).append($createLiUl)
    // $($cardDiv).append($createCardUl)
}
/**
 * @function
 * @description This gives functionality to each card to allow them to be used as an arguement that the cpus can use
 * @param {The clicked user card} event 
 */
const tryCard = function (event) {
    const cardEls = event.target.parentNode.children
    const id = Array.from(cardEls).indexOf(event.target)
    // const id = parseInt(event.target.id)
    // const cardObject = user.getCardById(id)
    const cssClass = event.target.classList[1]
    const cardObject = user.getCardByClass(cssClass)
    game.playAHand(cardObject, id)
    const $target = event.target
    $target.remove()
    
}
/**
 * @function
 * @description Gives functionality to the rules button to display the rules to spades
 */
const rules = function () {
    const displayRules = window.alert("This game is a faceoff between two pairs of teams. Each teammate sits directly across from them. The goal of the game is to play a card that has the highest value over your opponents but if your teammate is already winning to not outbeat your teammate. The value of the deck is, in descending order, : A , K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3, 2. Whatever suit is first played must be maintained if the players have that suit. otherwise the player has the option to play any spade card in their hand to win the hand. Spades value follows the same values detailed earlier")
}



const $startButton = $("#start")
$startButton.on("click", test)
const $rulesButton = $("#rules")
$rulesButton.on("click", rules)
const $logo = $(".logo")
const $container = $(".container")