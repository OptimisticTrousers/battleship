const createPlayer = (name = 'player') => {
    const getName = () => name

    const attack = (column, row, { getLocation, receiveAttack }) => {
        if (getLocation(column, row).hasBeenHit === undefined) {
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
