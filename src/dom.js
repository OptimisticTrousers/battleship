const renderAttacks = (player, column, row, enemyBoard) => {
    const cell = document.querySelector(
        `.${player}-board > .cell[column='${column}'][row='${row}']`
    )

    const location = enemyBoard.getLocation(column, row)
    if (location.isShip) {
        cell.classList.add('hit')
    } else {
        cell.classList.add('miss')
    }
}

const handleAttack = (column, row, enemyBoard, player) =>
    player.attack(column, row, enemyBoard)

const attackEnemyCell = (column, row, enemyBoard, player) => {
    handleAttack(column, row, enemyBoard, player)
    renderAttacks('enemy', column, row, enemyBoard)
}

const isSpaceAroundHit = (column, row, playerBoard) => {

    const nextColumn = playerBoard.getLocation(column + 1, row)
    const previousColumn = playerBoard.getLocation(column - 1, row)
    const nextRow = playerBoard.getLocation(column, row + 1)
    const previousRow = playerBoard.getLocation(column, row - 1)

    const spacesHit = []

    if(nextColumn && !nextColumn.hasBeenHit){
        spacesHit.push(nextColumn)
    }
    if(previousColumn && !previousColumn.hasBeenHit){
        spacesHit.push(previousColumn)
    }
    if(nextRow && !nextRow.hasBeenHit){
        spacesHit.push(nextRow)
    }
    if(previousRow && !previousRow.hasBeenHit){
        spacesHit.push(previousRow)
    }

    return spacesHit

}

const randomDirectionAttack = (column, row, playerBoard) => {

    const spacesHit = isSpaceAroundHit(column, row, playerBoard)

    const randomIndex = Math.floor(Math.random() * spacesHit.length)

    if(!spacesHit[randomIndex]) return randomDirectionAttack(column, row , playerBoard)

    return spacesHit[randomIndex]
}

const isRandomColumnGreaterThanCurrentColumn = (column, randomColumn) => 
    randomColumn > column

const isRandomRowGreaterThanCurrentColumn = (row, randomRow) => 
    randomRow > row

const listOfRandomCoordinates = (column, row, playerBoard) => {

        const locationPrototype = {
            location() {
                return playerBoard.getLocation(this.column, this.row)
            }
        }

        const top = Object.assign(Object.create(locationPrototype), {
            column,
            row: row - 1,
        })
        const bottom = Object.assign(Object.create(locationPrototype), {
            column,
            row: row + 1,
        })
        const right = Object.assign(Object.create(locationPrototype), {
            column: column + 1,
            row,
        })
        const left = Object.assign(Object.create(locationPrototype), {
            column: column - 1,
            row,
        })
        const directions = []

        directions.push(top)
        directions.push(bottom)
        directions.push(right)
        directions.push(left)

        return directions
}

const checkIfRowContainsShip = (column, playerBoard) => {
    for(let row = 0; row < 10; row++){
        if(playerBoard.getLocation(column, row).isShip){
            return true
        }
    }
    return false
}

const checkIfColumnContainsShip = (row, playerBoard) => {

    for(let column = 0; column < 10; column++){
        if(playerBoard.getLocation(column, row).isShip){
            return true
        }
    }
    return false
}

const attackPlayerCell = (playerBoard, enemy, elementColumn, elementRow, prevLocation) => {
        const location = playerBoard.getLocation(elementColumn, elementRow)
    if(location&& location.isShip === false && prevLocation && prevLocation.isShip === true){

        let prevLocationRow;
        let prevLocationColumn;
        if(prevLocation.column > elementColumn ){
        prevLocationColumn = prevLocation.column - 1
        }
        else if(prevLocation.column !== undefined &&  prevLocation.column < elementColumn){
        prevLocationColumn = prevLocation.column + 1
        }
        else if(prevLocation.row !== undefined && prevLocation.row > elementRow){
        prevLocationRow = prevLocation.row- 1

        }
        else if(prevLocation.row !== undefined && prevLocation.row < elementRow){
        prevLocationRow = prevLocation.row + 1

        }

        setTimeout(() => {

        attackPlayerCell(playerBoard, enemy, prevLocationColumn, prevLocationRow, prevLocation)
        },700)
    }
    else if(handleAttack(elementColumn, elementRow, playerBoard, enemy) === "You hit a ship!"){
        


        const randomPosition = randomDirectionAttack(elementColumn, elementRow, playerBoard)
        const randomPositionColumn = randomPosition.column

        const directions = listOfRandomCoordinates(elementColumn, elementRow, playerBoard)
        const filteredDirections = directions.filter((element) => element.column !== undefined && element.row !== undefined)
        const randomPositionRow = randomPosition.row
                if(location.isShip && location.isSunk() === false){

                    const random = Math.floor(Math.random() * filteredDirections.length)
                    // eslint-disable-next-line default-case
                    switch(random){
                        case 0:
                                attackPlayerCell(playerBoard, enemy, filteredDirections[0].column, filteredDirections[0].row, location)

                            break;
                        case 1:
                                attackPlayerCell(playerBoard, enemy, filteredDirections[1].column, filteredDirections[1].row, location)

                            break;
                        case 2:
                                attackPlayerCell(playerBoard, enemy, filteredDirections[2].column, filteredDirections[2].row, location)

                            break;
                        case 3:
                                attackPlayerCell(playerBoard, enemy, filteredDirections[3].column, filteredDirections[3].row)

                            break;

                    }
                }

        setTimeout(() => {
                attackPlayerCell(playerBoard, enemy, randomPositionColumn, randomPositionRow)
        }, 700)
    }

    setTimeout(() => {

    renderAttacks('player', elementColumn, elementRow, playerBoard)
    }, 700)
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

const cellDragListener = function (event) {
    console.log(this)
}

//const addDraggableProperties = () => {

    //const draggables = document.querySelectorAll('.cell[draggable="true"]')
    //draggables.forEach(draggable => {
        //draggable.addEventListener('dragstart', () => {
            //console.log('bob jones')
        //})
    //})
//}

function getDragAfterElement(container, y, x){
    const draggableElements = [...container.querySelectorAll('.cell:not(.dragging)')]

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        const offsetY = y - box.top - box.height / 2
        const offsetX = x - box.left - box.width/ 2
        console.log(child)
        if(offsetY < 0 && offsetY > closest.offsetY && offsetX < 0 && offsetX > closest.offsetX){
            return {offsetX, offsetY, element:child}
        }
            return closest

    }, {offsetX: Number.NEGATIVE_INFINITY, offsetY:Number.NEGATIVE_INFINITY}).element
}

const addListenerToBoat = (cells) => {

    //Video for drag and drop: https://www.youtube.com/watch?v=jfYWwQrtzzY

    const cellsContainer = document.querySelector('.player-board')
    const shipContainer  = document.createElement('div')
    cells.forEach((cell, index) => {
        cell.addEventListener('dragstart', () => {
            cell.classList.add('dragging')
        })

        cell.addEventListener('dragend', () => {
            cell.classList.remove('dragging')
        })
    })

    cellsContainer.addEventListener('dragover', (event) => {
        event.preventDefault()
        let afterElement;
        const draggable = document.querySelector('.dragging')
        console.log(afterElement)
        if(afterElement === null){

            cellsContainer.appendChild(draggable)
        } else{
            cellsContainer.insertBefore(draggable, afterElement)
        }
    })
}

const queryCells = () => {

    const patrolBoat= document.querySelectorAll('.cell[ship-name="Patrol Boat"]')
    addListenerToBoat(patrolBoat)

    //const patrolBoatContainer = document.createElement('div')

    const submarine = document.querySelectorAll('.cell[ship-name="Submarine"]')
    addListenerToBoat(submarine)
    //const submarineContainer = document.createElement('div')

    const carrier = document.querySelectorAll('.cell[ship-name="Carrier"]')
    addListenerToBoat(carrier)
    //const carrierContainer = document.createElement('div')

    const battleShip= document.querySelectorAll('.cell[ship-name="Battleship"]')
    addListenerToBoat(battleShip)
    //const battleShipContainer= document.createElement('div')

    const destroyer = document.querySelectorAll('.cell[ship-name="Destroyer"]')
    addListenerToBoat(destroyer)
    //const destroyerContainer = document.createElement('div')


}

function createDragAndDropFleet(player){
    renderPlayerShipSelect(1, 1)
    renderPlayerShipSelect(2, 2)
    renderPlayerShipSelect(3, 3)
    renderPlayerShipSelect(4, 4)

    function renderPlayerShipSelect(i, length){
        const container = document.querySelector('.player-board')
        const shipContainer = documnet.createElement('div')
        shipContainer.classList.add("ship-container")
        container.appendChild(shipContainer)

        const shipInfo = document.createElement("span")
        shipInfo.classList.add()

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
                cell.setAttribute('draggable', true)
            }
        }
    }
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

        modalWinner.textContent = 'You win!'
    }
    if (enemyBoard.checkIfAllShipsHaveSunk()) {
        const modal = document.querySelector('.modal')
        const modalWinner = document.querySelector('.modal-content > p')
        const playAgainButton = document.querySelector(
            '.modal-content > button'
        )

        modal.style.display = 'block'
        modalWinner.textContent = 'You lose!'
        playAgainButton.addEventListener('click', () => {
            location.reload()
        })
    }
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
                    ps.publish('click', {
                        cell,
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

export const attack = ({
    cell,
    column,
    row,
    playerBoard,
    enemyBoard,
    player,
    enemy,
}) => {
    // human player attacking computer
    attackEnemyCell(column, row, enemyBoard, player)
    // computer attacking human
    const { elementColumn, elementRow } = playerBoard.makeRandomCoordinates()
    attackPlayerCell(playerBoard, enemy, elementColumn, elementRow)

    checkIfGameOver(playerBoard, enemyBoard)
}
