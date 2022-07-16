import { addListenersToEnemyBoard, renderPlayerShips, pubSub, attack, createDragAndDropFleet, addButtonListeners} from './dom'

import createGameBoard from './gameboard/gameboard'
import createPlayer from './player/player'

const playerBoard = createGameBoard()
const enemyBoard = createGameBoard()
const player = createPlayer('player')
const computer = createPlayer('computer')

player.isTurn(computer)

addButtonListeners(playerBoard)

createDragAndDropFleet(playerBoard)

enemyBoard.randomlyPlaceShips()

const ps = pubSub()

addListenersToEnemyBoard(playerBoard, enemyBoard, player, computer, ps)

ps.subscribe('click', attack)

renderPlayerShips(playerBoard)