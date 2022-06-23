const createShip = (length) => {
    const status = Array(length).fill('undamaged')

    const getLength = () => status.length

    const getStatus = () => status

    const hit = (index) => {
        if (index < length) {
            status[index] = 'damaged'
        }
    }

    const isSunk = () => status.every((position) => position === 'damaged')

    return {
        isSunk,
        hit,
        getLength,
        getStatus
    }
}

module.exports = createShip
