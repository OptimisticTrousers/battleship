import { addListenersToPlayerBoard, addListenersToEnemyBoard} from './dom'

import createGameBoard from './gameboard/gameboard'

const playerBoard = createGameBoard()
playerBoard.randomlyPlaceShips()

addListenersToPlayerBoard(playerBoard)

