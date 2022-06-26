# TOP-battleship

Using test-driven development to make a battleship game with Jest. Read more about the rules here: https://en.wikipedia.org/wiki/Battleship_(game) or play the game here: http://en.battleship-game.org/.

First serious project while using Jest and a test-first approach

Utilizing factory functions to make Ship and Gameboard objects, utilizing babel for transpiling, prettier and eslint for formatting and linting, and webpack to bundle javascript.

bug.png shows a bug where the function, randomlyPlaceShips, would coincidentally create a grid of ships that prevents a ship of length 5 from rendering. Not fixed yet
