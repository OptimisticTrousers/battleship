const createPlayer = (name = 'player') => {
    const getName = () => name

    const attack = (column, row, { getLocation, receiveAttack }) => {
        const location = getLocation(column, row)
        if (location.hasBeenHit === undefined || location.getStatus().includes('unhit')) {
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
