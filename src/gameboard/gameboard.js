/* eslint-disable no-unused-expressions */
const createShip = require('../ship/ship')

/* eslint-disable no-param-reassign */
const createGameBoard = () => {
    const gameBoard = Array(10)
        .fill({ hasBeenHit: false, isShip: false, offLimits: false })
        .map(() =>
            Array(10).fill({
                hasBeenHit: false,
                isShip: false,
                offLimits: false,
            })
        )

    const ships = [
        createShip(5),
        createShip(4),
        createShip(3),
        createShip(3),
        createShip(2),
    ]

    const checkIfAllShipsHaveSunk = () =>
        gameBoard.flat().every(
            (position) => {
                if (position.isShip === false) return true
                if (position.isShip === true && position.hasBeenHit === true) {
                    return position.getStatus().every((unit) => unit === 'hit')
                }
                return false
            }

            // (position.isShip === false) ||
            // (position.isShip === true && position.hasBeenHit === true)
        )

    const getShotLocation = (column, row) => gameBoard[column][row]

    const addOffLimitAreaForHorizontallyPositionedShip = (
        column,
        row,
        shipLength
    ) => {
        const right = gameBoard[column + shipLength][row]

        if (right) {
            right.offLimits = true
        }
    }

    const addOffLimitAreaForShips = (column, row, shipLength) => {
        const top = gameBoard[column][row - 1]
        const left = gameBoard[column - 1][row]
        const topRight = gameBoard[column + 1][row - 1]
        const topLeft = gameBoard[column - 1][row - 1]
        const bottomRight = gameBoard[column + 1][row + shipLength]
        const leftRight = gameBoard[column - 1][row + shipLength]

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

    const addOffLimitAreaForVerticallyPositionedShip = (
        column,
        row,
        shipLength
    ) => {
        const bottom = gameBoard[column][row + shipLength]

        if (bottom) {
            bottom.offLimits = true
        }
    }

    const placeShip = (column, row, direction, ship) => {
        const shipLength = ship.getLength()
        addOffLimitAreaForShips(column, row, shipLength)
        if (direction === 'vertical') {
            if (row + shipLength <= 10) {
                for (let i = 0; i < shipLength; i += 1) {
                    gameBoard[column][row + i] = ship
                }
                addOffLimitAreaForVerticallyPositionedShip(column, row, shipLength)
                return true
            }
        } else if (direction === 'horizontal') {
            if (column + shipLength <= 10) {
                for (let i = 0; i < shipLength; i += 1) {
                    gameBoard[column + i][row] = ship
                }
                addOffLimitAreaForHorizontallyPositionedShip(column, row, shipLength)
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
            if (
                getShotLocation(randomColumn, randomRow).isShip === true ||
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
        getShotLocation,
        receiveAttack,
        checkIfAllShipsHaveSunk,
        placeShip,
        randomlyPlaceShips,
    }
}

const bob = createGameBoard()
bob.randomlyPlaceShips()

module.exports = createGameBoard
