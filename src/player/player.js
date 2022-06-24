import createGameBoard from '../gameboard/gameboard'

const createPlayer = () => {
    const board = createGameBoard()

    const attack = (column, row, player) => {
        player.getBoard().receiveAttack(column, row)
    }

    const getBoard = () => board

    return {
        attack,
        getBoard,
    }
}

module.exports = createPlayer
