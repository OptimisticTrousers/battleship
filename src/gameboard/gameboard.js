/* eslint-disable no-unused-expressions */
const createShip = require('../ship/ship')

/* eslint-disable no-param-reassign */
const createGameBoard = () => {
    const emptyCell = { hasBeenHit: false, isShip: false, offLimits: false }
    const gameBoard = Array(10)
        .fill(JSON.parse(JSON.stringify(emptyCell)))
        .map(() => Array(10).fill(JSON.parse(JSON.stringify(emptyCell))))

    const ships = [
        createShip(5),
        createShip(4),
        createShip(3),
        createShip(3),
        createShip(2),
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

    const getLocation = (column, row) => gameBoard?.[column]?.[row]

    const setLocation = (column, row, ship) => {
        gameBoard[column][row] = ship
    }

    const addOffLimitAreaForShips = (column, row, shipLength) => {
        const top = getLocation(column, row)
        const left = getLocation(column - 1, row)
        const topRight = getLocation(column + 1, row - 1)
        const topLeft = getLocation(column - 1, row - 1)
        const bottomRight = getLocation(column + 1, row + shipLength)
        const leftRight = getLocation(column - 1, row + shipLength)

        if (top) {
            top.offLimits = true
        }
        if (left) {
            left.offLimits = true
        }
        if (topRight) {
            topRight.offLimits = true
        }
        if (topLeft) {
            topLeft.offLimits = true
        }
        if (bottomRight) {
            bottomRight.offLimits = true
        }
        if (leftRight) {
            leftRight.offLimits = true
        }
    }

    const addOffLimitAreaForHorizontallyPositionedShip = (
        column,
        row,
        shipLength
    ) => {
        const right = getLocation(column + shipLength, row)
        addOffLimitAreaForShips(column, row, shipLength)

        if (right) {
            right.offLimits = true
        }
    }

    const addOffLimitAreaForVerticallyPositionedShip = (
        column,
        row,
        shipLength
    ) => {
        const bottom = getLocation(column, row + shipLength)

        addOffLimitAreaForShips(column, row, shipLength)

        if (bottom) {
            bottom.offLimits = true
        }
    }

    const placeShip = (column, row, direction, ship) => {
        const shipLength = ship.getLength()
        if (direction === 'vertical') {
            if (row + shipLength <= 10) {
                for (let i = 0; i < shipLength; i += 1) {
                    setLocation(column, row + i, ship)
                }
                // addOffLimitAreaForVerticallyPositionedShip(column, row, shipLength)
                return true
            }
        } else if (direction === 'horizontal') {
            if (column + shipLength <= 10) {
                for (let i = 0; i < shipLength; i += 1) {
                    setLocation(column + i, row, ship)
                }
                // addOffLimitAreaForHorizontallyPositionedShip(
                // column,
                // row,
                // shipLength
                // )
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
bob.placeShip(0, 0, 'horizontal', createShip(3))

module.exports = createGameBoard
