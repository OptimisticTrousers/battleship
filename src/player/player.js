const createGameBoard = require('../gameboard/gameboard')

const createPlayer = (name = 'player') => {
    const getName = () => name

    const board = createGameBoard()

    const attack = (column, row, { getBoard: enemyBoard }) => {

        const enemy = enemyBoard()
        if (enemy.getShotLocation(column, row).hasBeenHit === undefined) {
            enemy.receiveAttack(column, row)
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
