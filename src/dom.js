/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-globals */
/* eslint-disable consistent-return */
/* eslint-disable import/no-cycle */
/* eslint-disable default-case */
import confetti from 'canvas-confetti'
import { aiPlay, setWasHit } from './bot'
import { shipDrag } from './drag-and-drop'

// creates a delay to be used in an async function
function delay(delayInMs) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(2)
        }, delayInMs)
    })
}

const checkIfGameOver = (playerBoard, enemyBoard) => {
    if (playerBoard.checkIfAllShipsHaveSunk()) {
        const modal = document.querySelector('.modal')
        const modalWinner = document.querySelector('.modal-content > p')
        const playAgainButton = document.querySelector(
            '.modal-content > button'
        )

        modal.style.display = 'block'
        playAgainButton.addEventListener('click', () => {
            location.reload()
        })

        modalWinner.textContent = 'You lose!'
    }
    if (enemyBoard.checkIfAllShipsHaveSunk()) {
        const modal = document.querySelector('.modal')
        const modalWinner = document.querySelector('.modal-content > p')
        const playAgainButton = document.querySelector(
            '.modal-content > button'
        )

        const duration = 15 * 1000
        const animationEnd = Date.now() + duration
        const defaults = {
            startVelocity: 30,
            spread: 360,
            ticks: 60,
            zIndex: 0,
        }

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min
        }

        const interval = setInterval(() => {
            const timeLeft = animationEnd - Date.now()

            if (timeLeft <= 0) {
                return clearInterval(interval)
            }

            const particleCount = 50 * (timeLeft / duration)
            // since particles fall down, start a bit higher than random
            confetti({
                ...defaults,
                particleCount,
                origin: {
                    x: randomInRange(0.1, 0.3),
                    y: Math.random() - 0.2,
                },
            })
            confetti({
                ...defaults,
                particleCount,
                origin: {
                    x: randomInRange(0.7, 0.9),
                    y: Math.random() - 0.2,
                },
            })
        }, 250)

        modal.style.display = 'block'
        modalWinner.textContent = 'You win!'
        playAgainButton.addEventListener('click', () => {
            location.reload()
        })
    }
}

const enableCursor = () => {
    const cells = document.querySelectorAll('.enemy-board .cell')
    cells.forEach((cell) => {
        cell.style = 'cursor: pointer; pointer-events: initial;'
    })
}

const disableCursor = () => {
    const cells = document.querySelectorAll('.enemy-board .cell')
    cells.forEach((cell) => {
        cell.style = 'cursor: not-allowed; pointer-events: none;'
    })
}

const renderAttacks = async (
    player,
    column,
    row,
    enemyBoard,
    human,
    enemy,
    playerBoard
) => {
    const cell = document.querySelector(
        `.${player}-board > .cell[column='${column}'][row='${row}']`
    )

    if (enemyBoard.getLocation(column, row)?.isShip) {
        cell.classList.add('hit')
        enemyBoard.getLocation(column, row).domTargets.push(cell)
        if (enemyBoard.getLocation(column, row).isSunk()) {
            enemyBoard
                .getLocation(column, row)
                .domTargets.forEach((e) => e.classList.add('sunk'))
        }
        return
    }

    cell.classList.add('miss')
    enemy.isTurn(human)
    await delay(700)

    return enemyBoard.checkIfAllShipsHaveSunk()
        ? checkIfGameOver(playerBoard, enemyBoard)
        : aiPlay(false, human, enemy, undefined, playerBoard, enemyBoard)
}

const handleAttack = (column, row, enemyBoard, player) =>
    player.attack(column, row, enemyBoard)

const attackEnemyCell = (
    column,
    row,
    enemyBoard,
    playerBoard,
    player,
    enemy
) => {
    handleAttack(column, row, enemyBoard, player)
    renderAttacks('enemy', column, row, enemyBoard, player, enemy, playerBoard)
}

// renders attack for p2 (AI)
export async function renderAttackP2(
    p1,
    p2,
    pos1,
    pos2,
    playerBoard,
    enemyBoard
) {
    let isSunk = false
    const e = document.querySelector(
        `.player-board > .cell[column='${pos1}'][row='${pos2}']`
    )

    const attack = p2.attack(pos1, pos2, playerBoard)

    if (attack === 'You have already hit this spot!') {
        const repeat = true
        aiPlay(repeat, p1, p2, undefined, playerBoard, enemyBoard)
    }
    if (attack === "It's a hit!") {
        setWasHit(false)
        e.classList.add('miss')
    }
    if (attack === 'You hit a ship!') {
        setWasHit(true, true, pos1, pos2)
        e.classList.add('hit')
        playerBoard.getLocation(pos1, pos2).domTargets.push(e)
        // if ship is sunk, add "sunk" class
        if (playerBoard.getLocation(pos1, pos2).isSunk()) {
            playerBoard
                .getLocation(pos1, pos2)
                .domTargets.forEach((location) =>
                    location.classList.add('sunk')
                )
            isSunk = true
            if (playerBoard.checkIfAllShipsHaveSunk() === true)
                return checkIfGameOver(playerBoard, enemyBoard)
        }
        await delay(1000)
        return aiPlay(false, p1, p2, isSunk, playerBoard, enemyBoard)
    }

    p1.isTurn(p2) // gives turn to P1
}
// https://jsmanifest.com/the-publish-subscribe-pattern-in-javascript/

export const pubSub = () => {
    const subscribers = {}

    function publish(eventName, data) {
        if (!Array.isArray(subscribers[eventName])) {
            return
        }
        subscribers[eventName].forEach((callback) => {
            callback(data)
        })
    }
    function subscribe(eventName, callback) {
        if (!Array.isArray(subscribe[eventName])) {
            subscribers[eventName] = []
        }
        subscribers[eventName].push(callback)
        const index = subscribers[eventName].length - 1

        return {
            unsubscribe() {
                subscribers[eventName].splice(index, 1)
            },
        }
    }

    return {
        publish,
        subscribe,
    }
}

export const renderPlayerShips = ({ getLocation }) => {
    const playerBoardArea = document.querySelector('div.player-board')

    for (let column = 0; column < 10; column += 1) {
        for (let row = 0; row < 10; row += 1) {
            const cell = playerBoardArea.querySelector(
                `.cell:nth-child(${row * 10 + column + 1})`
            )
            cell.setAttribute('column', column)
            cell.setAttribute('row', row)
            const location = getLocation(column, row)
            if (location.isShip) {
                cell.classList.add('ship')
                cell.setAttribute('ship-name', location.getName())
            }
        }
    }
}

export function createDragAndDropFleet(playerBoard) {
    renderShipSelect(1, 1)
    renderShipSelect(2, 2)
    renderShipSelect(3, 3)
    renderShipSelect(4, 4)

    function renderShipSelect(i, length) {
        const container = document.querySelector('.ships')
        const shipContainer = document.createElement('div')
        shipContainer.classList.add('ship-container')
        container.appendChild(shipContainer)

        const shipInfo = document.createElement('span')
        shipInfo.classList.add(`info-${i}`)
        shipInfo.textContent = '2x'
        shipContainer.appendChild(shipInfo)

        const ship = document.createElement('div')
        ship.classList.add('ship')
        ship.classList.add(`ship-${i}`)
        ship.setAttribute('draggable', 'true')
        shipContainer.appendChild(ship)

        for (let j = 0; j < length; j += 1) {
            const cell = document.createElement('div')
            cell.classList.add('cell')
            ship.appendChild(cell)
        }
    }

    for (let i = 1; i < 5; i += 1) shipDrag(`.ship-${i}`, playerBoard)
}

export const addListenersToEnemyBoard = (
    playerBoard,
    enemyBoard,
    player,
    enemy,
    ps
) => {
    const enemyBoardArea = document.querySelector('div.enemy-board')

    for (let column = 0; column < 10; column += 1) {
        for (let row = 0; row < 10; row += 1) {
            // Crediting formula to calculate nth-child using nested loop: https://stackoverflow.com/questions/8872662/math-to-determine-item-index-based-on-col-row-selection-in-grid
            const cell = enemyBoardArea.querySelector(
                `.cell:nth-child(${row * 10 + column + 1})`
            )
            cell.setAttribute('column', column)
            cell.setAttribute('row', row)

            cell.addEventListener('click', () => {
                // disableCursor()
                if (playerBoard.isStartAllowed.get()) {
                    if (player.turn.get()) {
                        ps.publish('click', {
                            column,
                            row,
                            playerBoard,
                            enemyBoard,
                            player,
                            enemy,
                        })
                    }
                    // delay(1100).then(() => {
                    //     ps.publish('click', {
                    //         column,
                    //         row,
                    //         playerBoard,
                    //         enemyBoard,
                    //         player,
                    //         enemy,
                    //     })
                    //     enableCursor()
                    // })
                }
            })
        }
    }
}

export function addButtonListeners(playerBoard) {
    const randomizeButton = document.querySelector('button.randomize')

    randomizeButton.addEventListener('click', () => {
        const ships = document.querySelector('.ships')
        ships.style.display = 'none'
        playerBoard.randomlyPlaceShips()
        playerBoard.isStartAllowed.set(true)
        renderPlayerShips(playerBoard)
    })

    const resetButton = document.querySelector('button.reset')

    resetButton.addEventListener('click', () => {
        location.reload()
    })
}

export const attack = ({
    column,
    row,
    playerBoard,
    enemyBoard,
    player,
    enemy,
}) => {
    if (!player.turn.get() || !playerBoard.isStartAllowed.get()) return
    attackEnemyCell(column, row, enemyBoard, playerBoard, player, enemy)
}
