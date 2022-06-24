/* eslint-disable no-param-reassign */
const createGameBoard = () => {
    const gameBoard = Array(10)
        .fill({ hasBeenHit: false, isShip: false })
        .map((cell) => Array(10).fill({ hasBeenHit: false, isShip: false }))
    const populateBoard = () => {}

    const placeShip = (column, row, ship, direction) => {}

    const shipFit = (column, row, ship, direction) => {
        if (direction === 'vertical') {
            for (let i = 0; i < ship.getLength(); i += 1) {
                gameBoard[column][row + i] = ship
            }
        } else if (direction === 'horizontal') {
            for (let i = 0; i < ship.getLength(); i += 1) {
                gameBoard[column + i][row] = ship
            }
        }
    }

    const sinkAllShips = () => {
        gameBoard.flat().forEach((position) => {
            if (position.isShip === true) {
                position.hasBeenHit = true
            }
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
        sinkAllShips,
        receiveAttack,
        checkIfAllShipsHaveSunk,
        hasLastAttackHitShip,
        getShotLocation,
        shipFit,
    }
}

module.exports = createGameBoard
