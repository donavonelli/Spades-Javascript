/* User Stories */
1. Upon Loading the webpage the user is greeted with a Welcome page With a logo, below it a button saying start to start the game and below that a button that will display the rules

Rules: This game is a faceoff between two pairs of teams. Each teammate sits directly across from them. The goal of the game is to play a card that has the highest value over your opponents but if your teammate is already winning to not outbeat your teammate. The value of the deck is, in descending order, : A , K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3, 2. Whatever suit is first played must be maintained if the players have that suit. otherwise the player has the option to play any spade card in their hand to win the hand. Spades value follows the same values detailed earlier

2. When the game starts the user is greeted with 3 other human shilloeutes; 1 to the left of their webpage(cpu1), 1 to the top of their webpage (teammate) and 1 to the right of their webpage (cpu2). The bottom of the webpage shows 13 random playing cards

3. When the player clicks a card it moves to the center where it is then compared to each other players cards. If the player or teammate has the highest card their team gets a point otherwise the opposing team gets a point. the cards are then moved off screen.

Game Logic - Once the player plays a card the computer to their left tries to play a card of higher value if it is in their hand. the Teammate Does the same thing, trying to beat cpu 1's card and cpu 2 tries to beat teammates card. Each team tries to beat the highest value card of the opposing team. Whoever wins the hand (hand is an iteration of everyone playing a card) their team gets 1 point and the next hand starts with them. This goes on until there are no more cards to play. Whoever has the most points win

4. Once all 13 cards are played whoever has the most points win the game. The player is offered a button to reset the game. 


/* MVP Pitch */

This game is a faceoff between two pairs of teams. Each teammate sits directly across from them. The goal of the game is to play a card that has the highest value over your opponents but if your teammate is already winning to not outbeat your teammate. The value of the deck is, in descending order, : A , K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3, 2. Whatever suit is first played must be maintained if the players have that suit. otherwise the player has the option to play any spade card in their hand to win the hand. Spades value follows the same values detailed earlier. The game idea is to balance teamwork and probability. The player goal is to win as many hands as possible using as little high value cards as possible. For example, since spades are valuable trump cards it would be beneficial for the player to save them unless absolutely necessary I agree to deliver a full functioning game by the deadline that stands true to the spades rules.


/* Stretch Goals */
1. Add different profile pictures for CPU 1, Teammate, and CPU 2

2. Add transitions to show a card going from hand to the center for each player

3. Add sounds when each card is played

4. Allow players to predict how many hands they think they will win as a team. If they win those many hands or over those many hands reward them with extra points. If they make less than those many hands they lose extra points

