import { addListenersToEnemyBoard, renderPlayerShips,pubSub, randomizeBoard as randomizeListener, attack, createDragAndDropFleet, clearBoardDOM, addButtonListeners, randomizeBoard} from './dom'

import createGameBoard from './gameboard/gameboard'
import createShip from './ship/ship'
import createPlayer from './player/player'

const playerBoard = createGameBoard()
const enemyBoard = createGameBoard()
const player = createPlayer()
const computer = createPlayer()

//const randomizeButton = document.querySelector('button.randomize')

//randomizeButton.addEventListener('click', () => {

    //randomizeListener(playerBoard)
//})


//const resetButton = document.querySelector('button.reset')

//resetButton.addEventListener('click', () => {

    //location.reload()
//})
//randomizeBoard(playerBoard)

addButtonListeners(playerBoard)

createDragAndDropFleet(playerBoard)

randomizeListener(enemyBoard)

const ps = pubSub()

addListenersToEnemyBoard(playerBoard, enemyBoard, player, computer, ps)

ps.subscribe('click', attack)

renderPlayerShips(playerBoard)