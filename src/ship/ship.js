const createShip = (length) => {
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
        getLength,
        isSunk,
        hit,
        getStatus,
        isShip: true,
    }
}

module.exports = createShip
