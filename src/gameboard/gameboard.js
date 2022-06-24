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
        gameBoard.flat().every((position) => {
            if (position.isShip === false) return true
            if (position.isShip === true && position.hasBeenHit === true)
                return true

            return false
        })

    const getShotLocation = (column, row) => gameBoard[column][row]

    const placeShip = (column, row, direction, ship) => {
        const shipLength = ship.getLength()
        if (direction === 'vertical') {
            for (let i = 0; i < shipLength; i += 1) {
                if (column + shipLength < 10) {
                    gameBoard[column][row + i] = ship
                }
            }
        } else if (direction === 'horizontal') {
            for (let i = 0; i < shipLength; i += 1) {
                if (row + shipLength < 10) {
                    gameBoard[column + i][row] = ship
                }
            }
        }
    }

    const makeRandomCoordinates = () => {
        const randomDirection =
            Math.floor(Math.random() * 2) === 0 ? 'vertical' : 'horizontal'
        const randomColumn = Math.floor(Math.random() * 10)
        const randomRow = Math.floor(Math.random() * 10)
        return { randomColumn, randomRow, randomDirection }
    }

    const randomlyPlaceShips = () => {
        let shipDetails
        for (let i = 0; i < ships.length; i += 1) {
            const { randomColumn, randomRow, randomDirection } =
                makeRandomCoordinates()
            placeShip(randomColumn, randomRow, randomRow, ships[i])
            if (getShotLocation(randomColumn, randomRow).isShip === true) {
                shipDetails.push({ randomColumn, randomRow, randomDirection })
            } else {
                i -= 1
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
