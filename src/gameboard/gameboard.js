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
        Object.assign(emptyCell, { offLimits: true})

    const getLocation = (column, row) => gameBoard?.[column]?.[row]

    const setLocation = (column, row, ship = createOffLimitLocation()) => {
        if (gameBoard?.[column]?.[row]) {
            gameBoard[column][row] = ship
        }
    }

    const addOffLimitAreaForShips = (column, row) => {
        // top-left
        setLocation(column - 1, row - 1)
        // left
        setLocation(column - 1, row)
        // top
        setLocation(column, row - 1)
    }

    const addOffLimitAreaForHorizontallyPositionedShip = (
        column,
        row,
        shipLength
    ) => {
        // positions relative to the ship itself(ie. a horizontal ship's bottom is to the right)

        addOffLimitAreaForShips(column, row)
        // bottom
        setLocation(column + shipLength, row)
        // bottom-left
        setLocation(column - 1, row + 1)
        // bottom-right
        setLocation(column + shipLength, row + 1)
        // top-right
        setLocation(column + shipLength, row - 1)
    }

    const addOffLimitAreaForVerticallyPositionedShip = (
        column,
        row,
        shipLength
    ) => {
        // positions relative to how the user sees it(ie. a vertical ship's bottom is to the bottom)

        addOffLimitAreaForShips(column, row)
        // bottom
        setLocation(column, row + shipLength)
        // bottom-right
        setLocation(column + 1, row + shipLength)
        // bottom-left
        setLocation(column - 1, row + shipLength)
        // top-right
        setLocation(column + 1, row - 1)
    }

    const placeShip = (column, row, direction, ship) => {
        const shipLength = ship.getLength()
        if (direction === 'vertical') {
            if (row + shipLength <= 10) {
                addOffLimitAreaForVerticallyPositionedShip(
                    column,
                    row,
                    shipLength
                )
                for (let i = 0; i < shipLength; i += 1) {
                    setLocation(column, row + i, ship)
                    setLocation(column + 1, row + i)
                    setLocation(column - 1, row + i)
                }
                return true
            }
        } else if (direction === 'horizontal') {
            if (column + shipLength <= 10) {
                addOffLimitAreaForHorizontallyPositionedShip(
                    column,
                    row,
                    shipLength
                )
                for (let i = 0; i < shipLength; i += 1) {
                    setLocation(column + i, row, ship)
                    setLocation(column + i, row + 1)
                    setLocation(column + i, row - 1)
                }
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
                location.isShip === true || location.offLimits === true ||
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

module.exports = createGameBoard
