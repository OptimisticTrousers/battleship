import { addListenersToEnemyBoard, renderPlayerShips,pubSub, randomizeListener, attack, createDragAndDropFleet, clearBoardDOM} from './dom'

import createGameBoard from './gameboard/gameboard'
import createShip from './ship/ship'
import createPlayer from './player/player'

const playerBoard = createGameBoard()
const enemyBoard = createGameBoard()
const player = createPlayer()
const computer = createPlayer()

const randomizeButton = document.querySelector('button.randomize')

randomizeButton.addEventListener('click', () => {

    location.reload()
    randomizeListener(playerBoard)
})

randomizeListener(playerBoard)

const resetButton = document.querySelector('button.reset')

resetButton.addEventListener('click', () => {

    location.reload()
})

createDragAndDropFleet(playerBoard)

    randomizeListener(enemyBoard)

const ps = pubSub()

addListenersToEnemyBoard(playerBoard, enemyBoard, player, computer, ps)

ps.subscribe('click', attack)

renderPlayerShips(playerBoard)