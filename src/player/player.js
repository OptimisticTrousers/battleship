const createGameBoard = require('../gameboard/gameboard')

const createPlayer = () => {
    const board = createGameBoard()

    const attack = (column, row, enemy) => {

        const enemyBoard = enemy.getBoard()

        if (enemyBoard.getShotLocation(column, row).hit === false) {
            enemyBoard.receiveAttack(column, row)
            return "It's a hit!"
        }

        return 'You have already hit this spot!'
    }

    const getBoard = () => board

    return {
        attack,
        getBoard,
    }
}

const test = createPlayer()
const computer = createPlayer()

console.log(test.attack('A', 1, computer))

module.exports = createPlayer
