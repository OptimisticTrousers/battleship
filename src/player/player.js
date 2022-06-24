const createGameBoard = require('../gameboard/gameboard')

const createPlayer = (name) => {

    const getName = () => name

    const board = createGameBoard()

    const attack = (column, row, {getBoard: enemyBoard}) => {

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
    }
}

module.exports = createPlayer
