const createGameBoard = require('../gameboard/gameboard')

const createPlayer = (name, player = 'human') => {
    const getName = () => name

    const board = createGameBoard()

    const makeRandomMove = () => {
        if (player === 'AI') {
            const columns = 'ABCDEFGHIJ'
            const randomColumn =
                columns[Math.floor(Math.random() * columns.length)]
            const randomRow = Math.floor(Math.random() * columns.length)

            board.receiveAttack(randomColumn, randomRow)
        }
    }
    const attack = (column, row, { getBoard: enemyBoard }) => {
        if (enemyBoard().getShotLocation(column, row).hit === false) {
            enemyBoard().receiveAttack(column, row)
            return "It's a hit!"
        }

        return 'You have already hit this spot!'
    }

    const getBoard = () => board

    return {
        getName,
        attack,
        getBoard,
        makeRandomMove,
    }
}

module.exports = createPlayer
