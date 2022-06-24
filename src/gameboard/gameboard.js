/* eslint-disable no-param-reassign */
const createGameBoard = () => {
    const gameBoard = {
        A: [
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: true },
            { hit: false, ship: true },
            { hit: false, ship: true },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
        ],
        B: [
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: true },
        ],
        C: [
            { hit: false, ship: true },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
        ],
        D: [
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: true },
            { hit: false, ship: false },
            { hit: false, ship: false },
        ],
        E: [
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: true },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: true },
            { hit: false, ship: false },
            { hit: false, ship: false },
        ],
        F: [
            { hit: false, ship: false },
            { hit: false, ship: true },
            { hit: false, ship: false },
            { hit: false, ship: true },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: true },
            { hit: false, ship: false },
            { hit: false, ship: false },
        ],
        G: [
            { hit: false, ship: false },
            { hit: false, ship: true },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: true },
            { hit: false, ship: false },
            { hit: false, ship: false },
        ],
        H: [
            { hit: false, ship: false },
            { hit: false, ship: true },
            { hit: false, ship: false },
            { hit: false, ship: true },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: true },
        ],
        I: [
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: true },
            { hit: false, ship: false },
            { hit: false, ship: true },
            { hit: false, ship: true },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
        ],
        J: [
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
            { hit: false, ship: false },
        ],
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
    }
}

module.exports = createGameBoard
