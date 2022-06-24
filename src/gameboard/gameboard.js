/* eslint-disable no-param-reassign */
const createGameBoard = () => {
    const gameBoard = Array(10)
        .fill({ hasBeenHit: false, isShip: false })
        .map(() => Array(10).fill({ hasBeenHit: false, isShip: false }))

    const randomBoard = () => {}

    const placeShip = (column, row, ship, direction) => {

        const shipLength = ship.getLength()
        if (direction === 'vertical') {
            for (let i = 0; i < shipLength; i += 1) {
                if(column + i < gameBoard[column].length){

                    gameBoard[column][row + i] = ship
                }
                else{
                    return 'Cannot fit ship at these coordinates'
                }
            }
        } else if (direction === 'horizontal') {
            for (let i = 0; i < shipLength; i += 1) {
                if(column + i < gameBoard[column].length){

                    gameBoard[column + i][row] = ship
                }
                else{
                    return 'Cannot fit ship at these coordinates'
                }
            }
        }
    }

    const populateBoard = (playerShips) => {
        playerShips.map((ship) => {
            placeShip(...ship)
        })
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
        placeShip,
        populateBoard,
    }
}

module.exports = createGameBoard
