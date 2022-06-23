const createShip = (length) => {
    const status = Array(length).fill('undamaged');

    const getLength = () => status.length

    const hit = (index) => {
        if(index < length){

            status[index] = 'damaged'
        }
    }

    const isSunk = () => status.every('damaged')

    return {
        isSunk,
        hit,
        getLength
    }
}

module.exports = createShip
