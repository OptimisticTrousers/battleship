const createGameBoard = require('../gameboard/gameboard')

const createPlayer = () => {
    const board = createGameBoard()

    const attack = (column, row, player) => {
        const enemyBoard = player.getBoard()

        if (enemyBoard.getShotLocation(column, row).hit === false) {
            enemyBoard.receiveAttack(column, row)
            return 'It\'s a hit!'
        }

        return 'You have already hit this spot!'
    }

    const getBoard = () => board

    return {
        attack,
        getBoard,
    }
}

module.exports = createPlayer
