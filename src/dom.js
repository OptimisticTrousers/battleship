import createGameBoard from "./gameboard/gameboard"
import createShip from "./ship/ship"

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

const attackPlayerCell = (playerBoard, enemy, elementColumn, elementRow, prevLocation) => {
        const location = playerBoard.getLocation(elementColumn, elementRow)
    if(handleAttack(elementColumn, elementRow, playerBoard, enemy) === "You hit a ship!"){
        

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
                                attackPlayerCell(playerBoard, enemy, filteredDirections[3].column, filteredDirections[3].row, location)

                            break;

                    }
                }

        setTimeout(() => {
                attackPlayerCell(playerBoard, enemy, randomPositionColumn, randomPositionRow, prevLocation)
        }, 700)
    }
    else if(location&& location.isShip === false && prevLocation && prevLocation.isShip === true){

        let prevLocationRow;
        let prevLocationColumn;
        const shipLength = prevLocation.getLength()
        if(prevLocation.column > elementColumn ){
        prevLocationColumn = prevLocation.column - (prevLocation.column - elementColumn)
        }
        if(prevLocation.column < elementColumn){
        prevLocationColumn = prevLocation.column + (elementColumn - prevLocation.column)
        }
        if(prevLocation.row > elementRow){
        prevLocationRow = prevLocation.row -  (prevLocation.row - elementRow)

        }
        if(prevLocation.row < elementRow){
        prevLocationRow = prevLocation.row + (elementRow - prevLocation.row)

        }

        setTimeout(() => {

            if(prevLocation.isSunk() === false){

            attackPlayerCell(playerBoard, enemy, prevLocationColumn, prevLocationRow, prevLocation)
            }
        },700)
    }


    setTimeout(() => {

    renderAttacks('player', elementColumn, elementRow, playerBoard, prevLocation)
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

    const randomPossibility = Math.floor(Math.random() * 4)
    switch(randomPossibility){
        case 0:
        gameBoard.placeShip(9, 1, 'vertical', createShip(5))
        gameBoard.placeShip(0, 3, 'horizontal', createShip(3))
        gameBoard.placeShip(3, 6, 'horizontal', createShip(2))
        gameBoard.placeShip(6, 5, 'horizontal', createShip(3))
        gameBoard.placeShip(3, 9, 'horizontal', createShip(4))
            break;
        case 1:
        gameBoard.placeShip(0, 2, 'horizontal', createShip(5))
        gameBoard.placeShip(4, 5, 'horizontal', createShip(3))
        gameBoard.placeShip(8, 7, 'horizontal', createShip(2))
        gameBoard.placeShip(5, 9, 'horizontal', createShip(3))
        gameBoard.placeShip(6, 3, 'horizontal', createShip(4))
            break;
        case 2:
        gameBoard.placeShip(5, 1, 'horizontal', createShip(5))
        gameBoard.placeShip(3, 3, 'vertical', createShip(3))
        gameBoard.placeShip(0, 0, 'vertical', createShip(2))
        gameBoard.placeShip(6, 5, 'horizontal', createShip(3))
        gameBoard.placeShip(5, 9, 'horizontal', createShip(4))
            break;
        default:
            gameBoard.placeShip(0, 0, 'horizontal', createShip(5))
            gameBoard.placeShip(3, 4, 'horizontal', createShip(3))
            gameBoard.placeShip(6, 7, 'horizontal', createShip(2))
            gameBoard.placeShip(9, 1, 'vertical', createShip(3))
            gameBoard.placeShip(5, 9, 'horizontal', createShip(4))
            break;
    }

    renderPlayerShips(gameBoard)

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
