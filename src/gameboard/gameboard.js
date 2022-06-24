/* eslint-disable no-param-reassign */
const createGameBoard = () => {
    const gameBoard = Array(10)
        .fill({ hasBeenHit: false, isShip: false })
        .map(() => Array(10).fill({ hasBeenHit: false, isShip: false }))

    const placeShip = (column, row, direction, ship) => {
        const shipLength = ship.getLength()
        if (direction === 'vertical') {
            for (let i = 0; i < shipLength; i += 1) {
                if (column + i < gameBoard[column].length) {
                    gameBoard[column][row + i] = ship
                    return true
                }
            }
            return false
        }
        if (direction === 'horizontal') {
            for (let i = 0; i < shipLength; i += 1) {
                if (column + i < gameBoard[column].length) {
                    gameBoard[column + i][row] = ship
                    return true
                }
            }
            return false
        }
    }

    const makeRandomCoordinates = () => {
        const randomDirection =
            Math.floor(Math.random() * 2) === 0 ? 'vertical' : 'horizontal'
        const randomColumn = Math.floor(Math.random() * 10)
        const randomRow = Math.floor(Math.random() * 10)
        return { randomColumn, randomRow, randomDirection }
    }
    const randomBoard = ([ships]) => {
        ships.map((ship) => {
            while (placeShip(...makeRandomCoordinates(), ship) === false) {
                placeShip(...makeRandomCoordinates(), ship)
            }
        })
    }

    const populateBoard = (playerShips) => {
        playerShips.map((ship) => {
            placeShip(...ship)
        })
    }

    const getShotLocation = (column, row) => gameBoard[column][row]

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

    return {
        receiveAttack,
        checkIfAllShipsHaveSunk,
        hasLastAttackHitShip,
        getShotLocation,
        placeShip,
        populateBoard,
        randomBoard,
    }
}

module.exports = createGameBoard
