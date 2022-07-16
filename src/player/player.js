const createPlayer = (name = 'player') => {
    const getName = () => name

    const attack = (column, row, { getLocation, receiveAttack }) => {
        const location = getLocation(column, row)
        if (location.hasBeenHit === false || (location.isShip && location.getStatus().includes('unhit') === false)) {
            receiveAttack(column, row)
            if(location.hit){

                location.hit(location.position)
                return "You hit a ship!"
            }
            return "It's a hit!"
        }

        return 'You have already hit this spot!'
    }

    const randomPos = () => {
        const pos1 = Math.floor(Math.random() * 10);
        const pos2 = Math.floor(Math.random() * 10);
        return [pos1, pos2];
    };

    return {
        getName,
        attack,
        randomPos,
    }
}

module.exports = createPlayer
