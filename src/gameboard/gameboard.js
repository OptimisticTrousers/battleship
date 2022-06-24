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

    let shipFits = false

    const placeShip = (column, row, direction, ship) => {
        const shipLength = ship.getLength()
        if (direction === 'vertical') {
            for (let i = 0; i < shipLength; i += 1) {
                if (column + shipLength < gameBoard[column].length) {
                    gameBoard[column][row + i] = ship
                    shipFits = true
                }
            }
        }
        if (direction === 'horizontal') {
            for (let i = 0; i < shipLength; i += 1) {
                if (column + shipLength < gameBoard[column].length) {
                    gameBoard[column + i][row] = ship
                    shipFits = true
                }
            }
        }
        shipFits = false
    }

    const makeRandomCoordinates = () => {
        const randomDirection =
            Math.floor(Math.random() * 2) === 0 ? 'vertical' : 'horizontal'
        const randomColumn = Math.floor(Math.random() * 10)
        const randomRow = Math.floor(Math.random() * 10)
        return { randomColumn, randomRow, randomDirection }
    }

    const randomlyPlaceShips = () => {
        ships.map((ship) => {
            const { randomColumn, randomRow, randomDirection } =
                makeRandomCoordinates()
            placeShip(randomColumn, randomRow, randomDirection, ship)
        })
    }

    const populateBoard = (playerShips) => {
        playerShips.map((playerShip) => {
            placeShip(
                playerShip.column,
                playerShip.row,
                playerShip.direction,
                playerShip.ship
            )
        })
    }

    const receiveAttack = (column, row) => {
        gameBoard[column][row].hasBeenHit = true
    }

    const checkIfAllShipsHaveSunk = () =>
        gameBoard.flat().every((position) => {
            if (position.isShip === false) return true
            if (position.isShip === true && position.hasBeenHit === true)
                return true

            return false
        })

    const hasLastAttackHitShip = (column, row) =>
        gameBoard[column][row].isShip === true

    const getShotLocation = (column, row) => gameBoard[column][row]

    const getShips = () => ships

    return {
        getShips,
        receiveAttack,
        checkIfAllShipsHaveSunk,
        hasLastAttackHitShip,
        getShotLocation,
        placeShip,
        populateBoard,
        randomlyPlaceShips,
    }
}

module.exports = createGameBoard
