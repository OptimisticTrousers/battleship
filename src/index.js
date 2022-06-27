import { addListenersToEnemyBoard, renderPlayerShips} from './dom'

import createGameBoard from './gameboard/gameboard'
import createShip from './ship/ship'
import createPlayer from './player/player'

const playerBoard = createGameBoard()
const enemyBoard = createGameBoard()

const player = createPlayer()

const computer = createPlayer()

playerBoard.randomlyPlaceShips()
enemyBoard.placeShip(0, 0, 'horizontal', createShip(5))
enemyBoard.placeShip(3, 4, 'horizontal', createShip(3))
enemyBoard.placeShip(6, 7, 'horizontal', createShip(2))
enemyBoard.placeShip(9, 1, 'vertical', createShip(3))
enemyBoard.placeShip(5, 9, 'horizontal', createShip(4))

addListenersToEnemyBoard(playerBoard, enemyBoard, player, computer)


renderPlayerShips(playerBoard)