const createShip = require('../ship/ship')

/* eslint-disable no-param-reassign */
const createGameBoard = () => {
    const gameBoard = Array(10)
        .fill({ hasBeenHit: false, isShip: false })
        .map(() => Array(10).fill({ hasBeenHit: false, isShip: false }))

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

    const placeShip = (column, row, direction, ship, board = gameBoard) => {
        const shipLength = ship.getLength()
        if (direction === 'vertical') {
            if (column + shipLength <= 10) {
                for (let i = 0; i < shipLength; i += 1) {
                    board[column][row + i] = ship
                }
                return true
            }
        } else if (direction === 'horizontal') {
            if (row + shipLength <= 10) {
                for (let i = 0; i < shipLength; i += 1) {
                    board[column + i][row] = ship
                }
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

    const randomlyPlaceShips = ({getBoard}) => {
        const shipDetails = []
        for (let i = 0; i < ships.length; i += 1) {
            const { randomColumn, randomRow, randomDirection } =
                makeRandomCoordinates()
            if (
                getShotLocation(randomColumn, randomRow).isShip === true ||
                placeShip(
                    randomColumn,
                    randomRow,
                    randomDirection,
                    ships[i],
                ) === false
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

module.exports = createGameBoard
