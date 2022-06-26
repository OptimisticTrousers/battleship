/* eslint-disable no-unused-expressions */
const createShip = require('../ship/ship')

/* eslint-disable no-param-reassign */
const createGameBoard = () => {
    const emptyCell = { hasBeenHit: false, isShip: false, offLimits: false }
    const gameBoard = Array(10)
        .fill(structuredClone(emptyCell))
        .map(() => Array(10).fill(structuredClone(emptyCell)))

    const ships = [
        createShip(5, 'Carrier'),
        createShip(4, 'Battleship'),
        createShip(3, 'Destroyer'),
        createShip(3, 'Submarine'),
        createShip(2, 'Patrol Boat'),
    ]

    const checkIfAllShipsHaveSunk = () =>
        gameBoard.flat().every(
            (cell) => {
                if (cell.isShip === false) return true
                if (cell.isShip === true && cell.hasBeenHit === true) {
                    return cell.getStatus().every((unit) => unit === 'hit')
                }
                return false
            }

            // (position.isShip === false) ||
            // (position.isShip === true && position.hasBeenHit === true)
        )


    const createOffLimitLocation = () =>
        Object.assign(emptyCell, { offLimits: true })

    const getLocation = (column, row) => gameBoard?.[column]?.[row]

    const setLocation = (column, row, ship = createOffLimitLocation()) => {
        gameBoard[column][row] = ship
    }

    const addOffLimitAreaForShips = (column, row, shipLength) => {
        const top = [column, row-1]
        const left = [column - 1, row]
        const topRight = [column + 1, row - 1]
        const topLeft = [column - 1, row - 1]
        const bottomRight = [column + 1, row + shipLength]
        const leftRight = [column - 1, row + shipLength]



    }

    const addOffLimitAreaForHorizontallyPositionedShip = (
        column,
        row,
        shipLength
    ) => {
        const right = createOffLimitLocation()
        addOffLimitAreaForShips(column, row, shipLength)

        setLocation(column + shipLength, row, right)
    }

    const addOffLimitAreaForVerticallyPositionedShip = (
        column,
        row,
        shipLength
    ) => {
        const below = createOffLimitLocation()
        addOffLimitAreaForShips(column, row, shipLength)

        setLocation(column, row + shipLength, below)
    }

    const placeShip = (column, row, direction, ship) => {
        const shipLength = ship.getLength()
        if (direction === 'vertical') {
            if (row + shipLength <= 10) {
                for (let i = 0; i < shipLength; i += 1) {
                    setLocation(column, row + i, ship)
                }
                addOffLimitAreaForVerticallyPositionedShip(
                    column,
                    row,
                    shipLength
                )

                return true
            }
        } else if (direction === 'horizontal') {
            if (column + shipLength <= 10) {
                for (let i = 0; i < shipLength; i += 1) {
                    setLocation(column + i, row, ship)
                }
                addOffLimitAreaForHorizontallyPositionedShip(
                    column,
                    row,
                    shipLength
                )
                return true
            }
        }
        return false
    }

    const makeRandomCoordinates = () => {
        const randomDirection =
            Math.floor(Math.random() * 2) === 0 ? 'vertical' : 'horizontal'
        const randomColumn = Math.floor(Math.random() * 10)
        const randomRow = Math.floor(Math.random() * 10)
        return { randomColumn, randomRow, randomDirection }
    }

    const randomlyPlaceShips = () => {
        const shipDetails = []
        for (let i = 0; i < ships.length; i += 1) {
            const { randomColumn, randomRow, randomDirection } =
                makeRandomCoordinates()
            const ship = ships[i]
            const location = getLocation(randomColumn, randomRow)
            if (
                location.isShip === true ||
                location.offLimits === true ||
                placeShip(randomColumn, randomRow, randomDirection, ship) ===
                    false
            ) {
                i -= 1
            } else {
                shipDetails.push({ randomColumn, randomRow, randomDirection })
            }
        }
        return shipDetails
    }

    const receiveAttack = (column, row) => {
        gameBoard[column][row].hasBeenHit = true
    }

    return {
        getLocation,
        receiveAttack,
        checkIfAllShipsHaveSunk,
        placeShip,
        randomlyPlaceShips,
    }
}

const bob = createGameBoard()
bob.placeShip(0, 0, 'vertical', createShip(3, 'bobs ship'))

module.exports = createGameBoard
