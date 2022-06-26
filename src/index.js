import { addListenersToPlayerBoard, addListenersToEnemyBoard} from './dom'

import createGameBoard from './gameboard/gameboard'
import createPlayer from './player/player'

const playerBoard = createGameBoard()
const enemyBoard = createGameBoard()

const player = createPlayer()

const computer = createPlayer()

playerBoard.randomlyPlaceShips()
enemyBoard.randomlyPlaceShips()

addListenersToEnemyBoard(enemyBoard, player)

addListenersToPlayerBoard(playerBoard)


