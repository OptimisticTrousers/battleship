const createPlayer = (name = 'player', board) => {

    const gameBoard = board

    const getName = () => name

    const attack = (column, row, { getShotLocation, receiveAttack}) => {

        if (getShotLocation(column, row).hasBeenHit === undefined) {
            receiveAttack(column, row)
            return "It's a hit!"
        }

        return 'You have already hit this spot!'
    }

    return {
        getName,
        attack,
    }
}

module.exports = createPlayer
