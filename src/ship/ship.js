const createShip = (length, name = 'ship') => {

    const status = Array(length).fill('unhit')

    const getLength = () => status.length

    const getStatus = () => status

    const hit = (position) => {
        if (position < length) {
            status[position] = 'hit'
        }
    }

    const getName = () =>  name

    const isSunk = () => status.every((position) => position === 'hit')

    return {
        getName,
        getLength,
        isSunk,
        hit,
        getStatus,
        hasBeenHit: false,
        offLimits: true,
        isShip: true,
    }
}

module.exports = createShip
