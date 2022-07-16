/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-globals */
/* eslint-disable consistent-return */
/* eslint-disable import/no-cycle */
/* eslint-disable default-case */
import createShip from "./ship/ship"
import { aiPlay, setWasHit } from "./bot";
import { shipDrag } from "./drag-and-drop";

// creates a delay to be used in an async function
function delay(delayInMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, delayInMs);
  });
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

        modal.style.display = 'block'
        modalWinner.textContent = 'You win!'
        playAgainButton.addEventListener('click', () => {
            location.reload()
        })
    }
}

const renderAttacks = (player, column, row, enemyBoard) => {
    const cell = document.querySelector(
        `.${player}-board > .cell[column='${column}'][row='${row}']`
    )

    if(enemyBoard.getLocation(column, row)?.isShip){

        enemyBoard.getLocation(column, row).domTargets.push(cell)
        if(enemyBoard.getLocation(column, row).isSunk()){

            enemyBoard.getLocation(column, row).domTargets.forEach((e) => e.classList.add('sunk'))
        }
    }

    const location = enemyBoard.getLocation(column, row)
    if (location.isShip) {
        cell.classList.add('hit')
    } else {
        cell.classList.add('miss')
    }

}

const handleAttack = (column, row, enemyBoard, player) =>
    player.attack(column, row, enemyBoard)

const attackEnemyCell = async (column, row, enemyBoard, playerBoard, player, enemy) => {


    handleAttack(column, row, enemyBoard, player)
    renderAttacks('enemy', column, row, enemyBoard)
    await delay(700)
    return enemyBoard.checkIfAllShipsHaveSunk() ? checkIfGameOver(playerBoard, enemyBoard) : aiPlay(false, player, enemy, undefined, playerBoard, enemyBoard)
}

// renders attack for p2 (AI)
export async function renderAttackP2(p1, p2, pos1, pos2, playerBoard, enemyBoard) {
  let isSunk = false;
  const e = document.querySelector(
        `.player-board > .cell[column='${pos1}'][row='${pos2}']`
    )

  const attack = p2.attack(pos1, pos2, playerBoard);

  if (attack === "You have already hit this spot!") {
    const repeat = true;
    aiPlay(repeat, p1, p2, undefined, playerBoard, enemyBoard);
  }
  if (attack === "It's a hit!") {
    setWasHit(false);
    e.classList.add("miss");
  }
  if (attack === "You hit a ship!") {
    setWasHit(true, true, pos1, pos2);
    e.classList.add("hit");
    playerBoard.getLocation(pos1, pos2).domTargets.push(e)
    // if ship is sunk, add "sunk" class
    if (playerBoard.getLocation(pos1, pos2).isSunk()) {
      playerBoard.getLocation(pos1, pos2).domTargets.forEach((location) =>
        location.classList.add("sunk")
      );
      isSunk = true;
      if (playerBoard.checkIfAllShipsHaveSunk() === true) return checkIfGameOver(playerBoard, enemyBoard);
    }
    await delay(1000)
    return aiPlay(false, p1, p2, isSunk, playerBoard, enemyBoard);
  }

  // p1.isTurn(p2); // gives turn to P1
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
        const container = document.querySelector("body > main > div.player > div:nth-child(4)")
        const shipContainer = document.createElement('div')
        shipContainer.classList.add('ship-container')
        container.appendChild(shipContainer)

        const shipInfo = document.createElement("span")
        shipInfo.classList.add(`info-${i}`)
        shipInfo.textContent = "2x"
        shipContainer.appendChild(shipInfo)

        const ship = document.createElement("div")
        ship.classList.add("ship")
        ship.classList.add(`ship-${i}`)
        ship.setAttribute("draggable", "true")
        shipContainer.appendChild(ship)

        for(let j= 0; j< length; j+= 1) {
            const cell = document.createElement("div")
            cell.classList.add("cell")
            ship.appendChild(cell)
        }
    }

    for(let i = 1; i < 5; i += 1) shipDrag(`.ship-${i}`, playerBoard)
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

            cell.addEventListener(
                'click',
                () => {
                    if(playerBoard.isStartAllowed.get() === false) return
                    ps.publish('click', {
                        column,
                        row,
                        playerBoard,
                        enemyBoard,
                        player,
                        enemy,
                    })
                },
                { once: true }
            )
        }
    }
}

const clearBoardDOM = () => {
    const cells = document.querySelectorAll('.player-board > .cell')

    cells.forEach(cell => {
        cell.classList.remove('ship')
        cell.classList.remove('hit')
        cell.classList.remove('miss')
    })



}

export const randomizeListener = (gameBoard) => {

    gameBoard.clearBoard()
    clearBoardDOM()

    const randomPossibility = Math.floor(Math.random() * 10)
    switch(randomPossibility){
        case 0:
            gameBoard.placeShip(1, 1, 'horizontal',createShip(4))
            gameBoard.placeShip(1, 4, 'horizontal', createShip(4))
            gameBoard.placeShip(7, 3, 'horizontal', createShip(3))
            gameBoard.placeShip(2, 7, 'horizonal', createShip(3))
            gameBoard.placeShip(6, 7, 'horizontal', createShip(2))
            gameBoard.placeShip(5, 9, 'horizontal', createShip(2))
            gameBoard.placeShip(8, 1, 'vertical', createShip(1))
            gameBoard.placeShip(9, 5, 'vertical', createShip(1))
            break;
        case 1:
            gameBoard.placeShip(0, 1, 'vertical', createShip(4))
            gameBoard.placeShip(8, 1, 'vertical', createShip(4))
            gameBoard.placeShip(3, 1, 'horizontal', createShip(3))
            gameBoard.placeShip(0, 7, 'vertical', createShip(3))
            gameBoard.placeShip(3, 6, 'horizontal', createShip(2))
            gameBoard.placeShip(8, 7, 'horizontal', createShip(2))
            gameBoard.placeShip(4, 8, 'vertical', createShip(1))
            gameBoard.placeShip(6, 7, 'vertical', createShip(1))
            break;
        case 2:
            gameBoard.placeShip(0, 1, 'horizontal', createShip(4))
            gameBoard.placeShip(0, 3, 'horizontal', createShip(4))
            gameBoard.placeShip(9, 1, 'vertical', createShip(3))
            gameBoard.placeShip(2, 8, 'horizontal', createShip(3))
            gameBoard.placeShip(5, 3, 'vertical', createShip(2))
            gameBoard.placeShip(0, 6, 'vertical', createShip(2))
            gameBoard.placeShip(1, 6, 'vertical', createShip(1))
            gameBoard.placeShip(7, 4, 'vertical', createShip(1))
            break;
        case 3:
            gameBoard.placeShip(0, 0, 'vertical', createShip(4))
            gameBoard.placeShip(9, 0, 'vertical', createShip(4))
            gameBoard.placeShip(0, 5, 'vertical', createShip(3))
            gameBoard.placeShip(3, 1, 'vertical', createShip(3))
            gameBoard.placeShip(5, 1, 'vertical', createShip(2))
            gameBoard.placeShip(7, 1, 'vertical', createShip(2))
            gameBoard.placeShip(4, 7, 'vertical', createShip(1))
            gameBoard.placeShip(8, 7, 'vertical', createShip(1))
            break;
        case 4:
            gameBoard.placeShip(2, 4, 'horizontal', createShip(4))
            gameBoard.placeShip(0, 6, 'vertical', createShip(4))
            gameBoard.placeShip(2, 7, 'horizontal', createShip(3))
            gameBoard.placeShip(6, 6, 'horizontal', createShip(3))
            gameBoard.placeShip(7, 1, 'horizontal', createShip(2))
            gameBoard.placeShip(6, 8, 'horizontal', createShip(2))
            gameBoard.placeShip(2, 1, 'horizontal', createShip(1))
            gameBoard.placeShip(4, 1, 'horizontal', createShip(1))
            break;
        case 5:
            gameBoard.placeShip(1, 3, 'horizontal', createShip(4))
            gameBoard.placeShip(6, 2, 'vertical', createShip(4))
            gameBoard.placeShip(0, 6, 'vertical', createShip(3))
            gameBoard.placeShip(8, 2, 'vertical', createShip(3))
            gameBoard.placeShip(0, 0, 'horizontal', createShip(2))
            gameBoard.placeShip(2, 6, 'horizontal', createShip(2))
            gameBoard.placeShip(9, 6, 'vertical', createShip(1))
            gameBoard.placeShip(5, 9, 'vertical', createShip(1))
            break;
        case 6:
            gameBoard.placeShip(0, 0, 'vertical', createShip(4))
            gameBoard.placeShip(0, 6, 'vertical', createShip(4))
            gameBoard.placeShip(0, 2, 'horizontal', createShip(3))
            gameBoard.placeShip(6, 1, 'horizontal', createShip(3))
            gameBoard.placeShip(8, 3, 'horizontal', createShip(2))
            gameBoard.placeShip(9, 5, 'vertical', createShip(2))
            gameBoard.placeShip(9, 8, 'vertical', createShip(1))
            gameBoard.placeShip(7, 9, 'vertical', createShip(1))
            break;
        case 7:
            gameBoard.placeShip(0, 1, 'vertical', createShip(4))
            gameBoard.placeShip(0, 6, 'vertical', createShip(4))
            gameBoard.placeShip(2, 0, 'horizontal', createShip(3))
            gameBoard.placeShip(6, 0, 'horizontal', createShip(3))
            gameBoard.placeShip(9, 2, 'vertical', createShip(2))
            gameBoard.placeShip(9, 6, 'vertical', createShip(2))
            gameBoard.placeShip(9, 9, 'vertical', createShip(1))
            gameBoard.placeShip(7, 9, 'vertical', createShip(1))
            break;
        case 8:
            gameBoard.placeShip(2, 0, 'vertical', createShip(4))
            gameBoard.placeShip(7, 1, 'vertical', createShip(4))
            gameBoard.placeShip(2, 5, 'horizontal', createShip(3))
            gameBoard.placeShip(6, 7, 'vertical', createShip(3))
            gameBoard.placeShip(1, 9, 'horizontal', createShip(2))
            gameBoard.placeShip(2, 7, 'horizontal', createShip(2))
            gameBoard.placeShip(9, 6, 'vertical', createShip(1))
            gameBoard.placeShip(8, 9, 'vertical', createShip(1))
            break;
        case 9:
            gameBoard.placeShip(0, 0, 'horizontal', createShip(4))
            gameBoard.placeShip(5, 2, 'vertical', createShip(1))
            gameBoard.placeShip(2, 6, 'vertical', createShip(1))
            gameBoard.placeShip(0, 8, 'horizontal', createShip(3))
            gameBoard.placeShip(4, 5, 'vertical', createShip(4))
            gameBoard.placeShip(7, 4, 'horizontal', createShip(2))
            gameBoard.placeShip(6, 6, 'horizontal', createShip(2))
            gameBoard.placeShip(7, 8, 'horizontal', createShip(3))
            break;
    }

}

export const attack = ({
    column,
    row,
    playerBoard,
    enemyBoard,
    player,
    enemy,
}) => {

    attackEnemyCell(column, row, enemyBoard, playerBoard, player, enemy)
}
