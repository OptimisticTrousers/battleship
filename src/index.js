import { addListenersToEnemyBoard, renderPlayerShips, pubSub, randomizeBoard, attack, createDragAndDropFleet, addButtonListeners} from './dom'

import createGameBoard from './gameboard/gameboard'
import createPlayer from './player/player'

const playerBoard = createGameBoard()
const enemyBoard = createGameBoard()
const player = createPlayer()
const computer = createPlayer()

addButtonListeners(playerBoard)

createDragAndDropFleet(playerBoard)

randomizeBoard(enemyBoard)

const ps = pubSub()

addListenersToEnemyBoard(playerBoard, enemyBoard, player, computer, ps)

ps.subscribe('click', attack)

renderPlayerShips(playerBoard)