/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-return-assign */
import {renderPlayerShips} from './dom'
import createShip from './ship/ship'

let totalAmountShips = 0

function shipDrag(shipName, playerBoard) {
    let amountLeft = 2

    const ship = document.querySelector(shipName)
    const body = document.querySelector('body')
    const cells = document.querySelectorAll('.player-board > .cell')
    const child = ship.childNodes
    let dragSelection;
    let offset;
    let dir = "horizontal"

    if(child[0]) child[0].addEventListener('mouseenter', () => (offset = 0))
    if(child[1]) child[1].addEventListener('mouseenter', () => (offset = -1))
    if(child[2]) child[2].addEventListener('mouseenter', () => (offset = -2))
    if(child[3]) child[3].addEventListener('mouseenter', () => (offset = -3))

    function changeDir(e) {
        if(dir === "horizontal") {
            dir = "vertical"
            e.target.parentNode.classList.toggle("rotated")
        } else {
            dir = "horizontal";
            e.target.parentNode.classList.toggle("rotated")
        }
    }

    ship.addEventListener("click", (e) => changeDir(e))

    ship.addEventListener("dragstart", () => {
        for(let i = 0; i < 10; i += 1){
            playerBoard.gameBoard[i].forEach((e) => {
                if(e.offLimits || e.isShip)
                document.querySelector(`.player-board > .cell[column='${e.column}'][row='${e.row}']`).classList.toggle("not-available")
            })
        }
    })

    ship.addEventListener('dragend', (e, i) => {

        document.querySelectorAll(".not-available").forEach((e) => e.classList.remove("not-available"))

        if(dragSelection === -1) return

        let pos1;
        let pos2;
        let pos = `${  dragSelection}`

        if(dragSelection < 10) {
            pos1 = 0;
            pos2 = dragSelection
        } else {
            pos = pos.split("")
            pos1 = pos[0] * 1
            pos2 = pos[1] * 1
        }

        if(dir === "horizontal") pos2 += offset
        if(dir === "vertical") pos1 += offset

        if(pos2 < 0) return

        if(shipName === ".ship-1"){
            if(playerBoard.placeShip(pos2, pos1, dir, createShip(1)) === false) return
            }
        if(shipName === ".ship-2"){

            if(playerBoard.placeShip(pos2, pos1, dir, createShip(2)) === false) return
        }
        if(shipName === ".ship-3") {

            if(playerBoard.placeShip(pos2, pos1, dir, createShip(3)) === false) return
        }
        if(shipName === ".ship-4") {

            if(playerBoard.placeShip(pos2, pos1, dir, createShip(4)) === false) return
        }

        renderPlayerShips(playerBoard)

        amountLeft -= 1
        totalAmountShips += 1

        if(totalAmountShips === 8) playerBoard.isStartAllowed.set(true)
        ship.parentNode.firstChild.textContent = `${amountLeft}x`
        if(amountLeft === 0) ship.parentNode.style.display = "none" 
        if(playerBoard.checkIfBoardHasBeenFullyPopulated()) {
            const container = document.querySelector("body > main > div.player > div:nth-child(4)")
            container.style.display ="none"
            const randomButton = document.querySelector('.randomize')
            randomButton.style.display = "none"
            playerBoard.isStartAllowed.set(true)
        }
    })

    cells.forEach((e, i) => {
        e.addEventListener("dragover", (event) => {
            event.preventDefault()
            dragSelection = i 
        })
    })

    body.addEventListener("dragenter", () => {
        dragSelection = -1
    })
}

export {shipDrag, totalAmountShips}