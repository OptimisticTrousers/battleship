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
        const [columns, data] = Object.entries(gameBoard)

        columns[data].forEach((column) => {
            // eslint-disable-next-line no-param-reassign
            if (column.ship === true) column.hit = true
        })
    }

    const receiveAttack = (column, row) => {
        gameBoard[column][row].hit = true
    }

    const checkIfAllShipsHaveSunk = () => {
        Object.entries(gameBoard)
            .flat()
            .every((position) => {
                if (position.ship === true) {
                    if (position.hit === true) {
                        return true
                    }
                }
                return false
            })
    }

    const hasLastAttackHitShip = (column, row) =>
        gameBoard[column][row].ship === true

    return {
        sinkAllShips,
        receiveAttack,
        checkIfAllShipsHaveSunk,
        hasLastAttackHitShip,
    }
}

module.exports = createGameBoard;
