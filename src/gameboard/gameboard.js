/* eslint-disable no-unused-expressions */
const createShip = require('../ship/ship')

/* eslint-disable no-param-reassign */
const createGameBoard = () => {
    const emptyCell = { hasBeenHit: false, isShip: false, offLimits: false }
    const gameBoard = Array(10)
        .fill(structuredClone(emptyCell))
        .map(() => Array(10).fill(structuredClone(emptyCell)))

    const ships = [
        createShip(5, 'Carrier'),
        createShip(4, 'Battleship'),
        createShip(3, 'Destroyer'),
        createShip(3, 'Submarine'),
        createShip(2, 'Patrol Boat'),
    ]

    const checkIfAllShipsHaveSunk = () =>
        gameBoard.flat().every(
            (cell) => {
                if (cell.isShip === false) return true
                if (cell.isShip === true && cell.hasBeenHit === true) {
                    return cell.getStatus().every((unit) => unit === 'hit')
                }
                return false
            }

            // (position.isShip === false) ||
            // (position.isShip === true && position.hasBeenHit === true)
        )

    const createOffLimitLocation = () =>
        Object.assign(emptyCell, { offLimits: true })

    const getLocation = (column, row) => gameBoard?.[column]?.[row]

    const setLocation = (column, row, ship = createOffLimitLocation()) => {
        gameBoard[column][row] = ship
    }

    const addOffLimitAreaForShips = (column, row, shipLength) => {
        const top = createOffLimitLocation()

        gameBoard[column][row - 1] = top

        const left = createOffLimitLocation()

        gameBoard[column - 1][row] = left
        const topRight = createOffLimitLocation()

        gameBoard[column + 1][row - 1] = topRight

        const topLeft = createOffLimitLocation()
        gameBoard[column - 1][row - 1] = topLeft

        const bottomRight = createOffLimitLocation()
        gameBoard[column + 1][row + shipLength] = bottomRight

        const bottomLeft = createOffLimitLocation()
        gameBoard[column - 1][row + shipLength] = bottomLeft

        // const top = [column, row - 1]
        // const topElement = getLocation(top[0], top[1])
        // const left = [column - 1, row]
        // const leftElement = getLocation(left[0], left[1])
        // const topRight = [column + 1, row - 1]
        // const topRightElement = getLocation(topRight[0], topRight[1])
        // const topLeft = [column - 1, row - 1]
        // const topLeftElement = getLocation(topLeft[0], topLeft[1])
        // const bottomRight = [column + 1, row + shipLength]
        // const bottomRightElement = getLocation(bottomRight[0], bottomRight[1])
        // const bottomLeft = [column - 1, row + shipLength]
        // const bottomLeftElement = getLocation(bottomLeft[0], bottomLeft[1])

        // if (topElement) {
        // setLocation(top[0], top[1], topElement)
        // }
        // if (leftElement) {
        // setLocation(left[0], left[1], leftElement)
        // }
        // if (topRightElement) {
        // setLocation(topRight[0], topRight[1], topRightElement)
        // }
        // if (topLeftElement) {
        // setLocation(topLeft[0], topLeft[1], topLeftElement)
        // }
        // if (bottomRightElement) {
        // setLocation(bottomRight[0], bottomRight[1], bottomRightElement)
        // }
        // if (bottomLeftElement) {
        // setLocation(bottomLeft[0], bottomLeft[1], bottomLeftElement)
        // }
    }

    const addOffLimitAreaForHorizontallyPositionedShip = (
        column,
        row,
        shipLength
    ) => {
        const right = createOffLimitLocation()

        gameBoard[column + shipLength][row] = right
        addOffLimitAreaForShips(column, row, shipLength)
        // const right = [column + shipLength, row]
        // const rightElement = getLocation(right[0], right[1])

        // if (rightElement) {
        // setLocation(right[0], right[1], rightElement)
        // }
        // addOffLimitAreaForShips(column, row, shipLength)
    }

    const addOffLimitAreaForVerticallyPositionedShip = (
        column,
        row,
        shipLength
    ) => {
        const bottom = createOffLimitLocation()

        gameBoard[column][row + shipLength] = bottom
        addOffLimitAreaForShips(column, row, shipLength)
        // const bottom = [column , row + shipLength]
        // const bottomElement = getLocation(bottom[0], bottom[1])

        // if(bottomElement){
        // setLocation(bottom[0], bottom[1], bottomElement)
        // }
        // addOffLimitAreaForShips(column, row ,shipLength)
    }

    const placeShip = (column, row, direction, ship) => {
        const shipLength = ship.getLength()
        if (direction === 'vertical') {
            if (row + shipLength <= 10) {
                for (let i = 0; i < shipLength; i += 1) {
                    setLocation(column, row + i, ship)
                }
                addOffLimitAreaForVerticallyPositionedShip(
                    column,
                    row,
                    shipLength
                )
                console.log(gameBoard)
                return true
            }
        } else if (direction === 'horizontal') {
            if (column + shipLength <= 10) {
                for (let i = 0; i < shipLength; i += 1) {
                    setLocation(column + i, row, ship)
                }
                addOffLimitAreaForHorizontallyPositionedShip(
                    column,
                    row,
                    shipLength
                )
                return true
            }
        }
        return false
    }

    const makeRandomCoordinates = () => {
        const randomDirection =
            Math.floor(Math.random() * 2) === 0 ? 'vertical' : 'horizontal'
        const randomColumn = Math.floor(Math.random() * 10)
        const randomRow = Math.floor(Math.random() * 10)
        return { randomColumn, randomRow, randomDirection }
    }

    const randomlyPlaceShips = () => {
        const shipDetails = []
        for (let i = 0; i < ships.length; i += 1) {
            const { randomColumn, randomRow, randomDirection } =
                makeRandomCoordinates()
            const ship = ships[i]
            const location = getLocation(randomColumn, randomRow)
            if (
                location.isShip === true ||
                location.offLimits === true ||
                placeShip(randomColumn, randomRow, randomDirection, ship) ===
                    false
            ) {
                i -= 1
            } else {
                shipDetails.push({ randomColumn, randomRow, randomDirection })
            }
        }
        return shipDetails
    }

    const receiveAttack = (column, row) => {
        gameBoard[column][row].hasBeenHit = true
    }

    const checkIfOffLimitZoneWasCorrectlyImplemented = (shipLength) =>
        gameBoard.flat().filter((element) => element.offLimits === true)
            .length ===
        shipLength + 2
    // adding shipLength plus two because for every increase in the size of ship, the zones covered increase by 2 units

    return {
        checkIfOffLimitZoneWasCorrectlyImplemented,
        getLocation,
        receiveAttack,
        checkIfAllShipsHaveSunk,
        placeShip,
        randomlyPlaceShips,
    }
}

const bob = createGameBoard()
bob.placeShip(1, 1, 'vertical', createShip(2, 'bobs ship'))

module.exports = createGameBoard
