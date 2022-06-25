import renderPlayerBoard from './dom'
import createGameBoard from './gameboard/gameboard'

const playerBoard = createGameBoard()
playerBoard.randomlyPlaceShips()

renderPlayerBoard(playerBoard)
