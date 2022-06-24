/* eslint-disable no-param-reassign */
const createGameBoard = () => {

    const gameBoard = Array(10).fill({hasBeenHit: false, isShip: false}).map(cell => Array(10).fill({hasBeenHit: false, isShip: false}))
    const populateBoard = () => {}

    const placeShip = (column, row, ship, direction) => {}

    const shipFit = (column, row, ship, direction) => {

        if (direction === 'vertical') {
            for (let i = 0; i < ship.getLength(); i += 1) {
                gameBoard[column][row + i] = ship
            }
        }
        else if(direction === 'horizontal'){
            for (let i = 0; i < ship.getLength(); i += 1) {
                gameBoard[column + i][row] = ship
            }
        }
    }


    const sinkAllShips = () => {
        Object.values(gameBoard)
            .flat()
            .forEach((position) => {
                if (position.ship === true) {
                    position.hit = true
                }
            })
    }

    const getShotLocation = (column, row) => gameBoard[column][row]

    const receiveAttack = (column, row) => {
        gameBoard[column][row].hit = true
    }

    const checkIfAllShipsHaveSunk = () =>
        Object.values(gameBoard)
            .flat()
            .every((position) => {
                if (position.ship === false) return true
                if (position.ship === true && position.hit === true) return true

                return false
            })

    const hasLastAttackHitShip = (column, row) =>
        gameBoard[column][row].ship === true

    return {
        sinkAllShips,
        receiveAttack,
        checkIfAllShipsHaveSunk,
        hasLastAttackHitShip,
        getShotLocation,
    }
}

module.exports = createGameBoard
