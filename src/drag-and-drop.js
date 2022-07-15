import {renderPlayerShips} from './dom'
let totalAmountShips = 0

function shipDrag(player, shipName, playerBoard) {
    let amountLeft = 2

    const ship = document.querySelector(shipName)
    const body = document.querySelector('body')
    const cells = document.querySelectorAll('.player-board > .cell')
    const child = ship.childNodes
    let dragSelection;
    let offset;
    let dir = "h"

    if(child[0]) child[0].addEventListener('mouseenter', () => (offset = 0))
    if(child[1]) child[1].addEventListener('mouseenter', () => (offset = -1))
    if(child[2]) child[2].addEventListener('mouseenter', () => (offset = -2))
    if(child[3]) child[3].addEventListener('mouseenter', () => (offset = -3))

    ship.addEventListener("click", (e) => changeDir(e))

    ship.addEventListener("dragstart", (e) => {
        for(let i = 0; i < 10; i++)
            playerBoard.gameBoard[i].forEach((e, j) => {
                if(e === "res")
                document.querySelector(`.player-board > .cell[column='${e}'][row='${j}']`).classList.toggle("not-available")
            })
    })

    ship.addEventListener('dragend', (e, i) => {

        document.querySelectorAll(".not-available").forEach((e) => e.classList.remove("not-available"))

        if(dragSelection === -1) return

        let pos1;
        let pos2;
        let pos = "" + dragSelection

        if(dragSelection < 10) {
            pos1 = 0;
            pos2 = dragSelection
        } else {
            pos = pos.split("")
            pos1 = pos[0] * 1
            pos2 = pos[1] * 1
        }

        if(dir === "h") pos2 += offset
        if(dir === "v") pos1 += offset

        if(pos2 < 0) return

        if(shipName === ".ship-1"){
            if(playerBoard.placeShip(pos1, pos2, 1, dir) === false) return
            }
        if(shipName === ".ship-2"){

            if(playerBoard.placeShip(pos1, pos2, 2, dir) === false) return
        }
        if(shipName === ".ship-3") {

            if(playerBoard.placeShip(pos1, pos2, 3, dir) === false) return
        }
        if(shipName === ".ship-4") {

            if(playerBoard.placeShip(pos1, pos2, 4, dir) === false) return
        }

        renderPlayerShips(playerBoard)

        amountLeft -= 1
        totalAmountShips++

        if(totalAmountShips === 8) playerBoard.isStartAllowed.set(true)
        ship.parentNode.firstChild.textContent = amountLeft + "x"
        if(amountLeft === 0) ship.parentNode.style.display = "none"
    })

    cells.forEach((e, i) => {
        e.addEventListener("dragover", (e) => {
            e.preventDefault()
            dragSelection = i 
        })
    })

    body.addEventListener("dragenter", () => {
        dragSelection = -1
    })

    function changeDir(e) {
        if(dir === "h") {
            dir = "v"
            e.target.parentNode.classList.toggle("rotated")
        } else {
            dir = "h";
            e.target.parentNode.classList.toggle("rotated")
        }
    }
}

export {shipDrag, totalAmountShips}