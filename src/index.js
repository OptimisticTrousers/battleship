import { addListenersToPlayerBoard, addListenersToEnemyBoard} from './dom'

import createGameBoard from './gameboard/gameboard'

const playerBoard = createGameBoard()
const enemyBoard = createGameBoard()

playerBoard.randomlyPlaceShips()
enemyBoard.randomlyPlaceShips()

addListenersToEnemyBoard(enemyBoard)

addListenersToPlayerBoard(playerBoard)

