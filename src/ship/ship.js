const createShip = (length) => {
    const status = Array(length).fill('undamaged')

    const getLength = () => status.length

    const getStatus = () => status

    const hit = (position) => {
        if (position < length) {
            status[position] = 'damaged'
        }
    }


    const isSunk = () => status.every((position) => position === 'damaged')

    return {
        isSunk,
        hit,
        getLength,
        getStatus,
        isShip: true,
    }
}

module.exports = createShip
