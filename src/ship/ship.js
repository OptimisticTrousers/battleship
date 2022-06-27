const createShip = (length, name = 'ship') => {

    const status = Array(length).fill('unhit')

    const getLength = () => status.length

    const getStatus = () => status

    const hit = (position) => {
        if (position < length) {
            status[position] = 'hit'
        }
    }

    const isSunk = () => status.every((position) => position === 'hit')

    return {
        name,
        getLength,
        isSunk,
        hit,
        getStatus,
        hasBeenHit: false,
        isShip: true,
    }
}

module.exports = createShip
