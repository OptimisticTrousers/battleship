const createPlayer = (name = 'player') => {

    let turn = false
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

    const isTurn = (enemy) => {
        turn = true
        enemy.turn.set(false)
    }

    return {
        getName,
        attack,
        turn: {
            get () {
                return turn;
            },
            set (value) {
                turn = value;
            },
        },
        isTurn,
        }
}

module.exports = createPlayer
