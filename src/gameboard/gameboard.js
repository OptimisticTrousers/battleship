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
        if (gameBoard?.[column]?.[row] === undefined) return true
        gameBoard[column][row] = ship
        return true
    }

    const addOffLimitAreaForShips = (column, row) => {
        // top-left
        setLocation(column - 1, row - 1)
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

    const checkIfColumnCoordinateIsValid = (column, shipLength) =>
        column >= 0 && column + shipLength - 1 < gameBoard.length

    const checkIfRowCoordinateIsValid = (row, shipLength) =>
        row >= 0 && row + shipLength - 1 < gameBoard.length

    const checkIfLocationIsAShipOrOffLimits = (location) => {
        if (location.isShip === true || location.offLimits === true) return true

        return false
    }

    const isPlacementPossible = (ship, row, column, direction) => {
        if(row < 0 || row > 10 - 1 || column < 0 || column > 10 - 1) return false

        const shipLength = ship.getLength(0)
        if(direction === 'vertical'){
            if(row + shipLength > 10) return false
        } else{
            // eslint-disable-next-line no-lonely-if
            if(column + shipLength > 10) return false
        }

        if(direction === 'vertical'){
            for(let i = 0; i < ship.length; i++){
                if(gameBoard[row + i][column]) return false
            }
        } else {
            for(let i = 0; i < ship.length; i++){
                if(gameBoard[row][column + i]) return false
            }
        }

        if(direction === 'vertical'){
            for(let i = 0; i < ship.length; i++){
                for(let x = -1; x <= 1; x++){
                    for(let y = -1; y <= 1; y++){
                        if(row + x + i < 0 || row + x + i >= 10 || column + y < 0 || column + y >= 10) continue

                        if(gameBoard[row + x + i][column + y]) return false
                    }
                }
            }
        } else{
            for(let i = 0; i < ship.length; i++){
                for(let x = -1; x <= 1; x++){
                    for(let y = -1; y <= 1; y++){
                        if(row + x < 0 || row + x >= 10 || column + y + i < 0 || column + y + i >= 10) continue

                        if(gameBoard[row + x][column + y + i]) return false
                    }
                }
            }
        }

        return true

    }

    const placeShip = (column, row, direction, ship) => {

        if(isPlacementPossible(ship, row, column, direction)) return false

        const shipLength = ship.getLength()
        if (direction === 'vertical') {
                for (let i = 0; i < shipLength; i += 1) {
                        setLocation(column, row + i, ship)
                    }
        } else if (direction === 'horizontal') {
                for (let i = 0; i < shipLength; i += 1) {
                        setLocation(column + i, row, ship)
                }
                return true
        }
        return false
    }


    const makeRandomCoordinates = (shipLength) => {
        const randomDirection =
            Math.floor(Math.random() * 2) === 0 ? 'vertical' : 'horizontal'
        const randomColumn = Math.floor(Math.random() * 10)
        const randomRow = Math.floor(Math.random() * 10)
        //if (!checkIfColumnCoordinateIsValid(randomColumn, shipLength))
            //return makeRandomCoordinates(shipLength)
        //if (!checkIfRowCoordinateIsValid(randomRow, shipLength))
            //return makeRandomCoordinates(shipLength)
        return { randomColumn, randomRow, randomDirection }
    }

    const randomlyPlaceShips = () => {
        const shipDetails = []
        for (let i = 0; i < ships.length; i += 1) {
            const ship = ships[i]
            const { randomColumn, randomRow, randomDirection } =
                makeRandomCoordinates(ship.getLength())
            shipDetails.push({ randomColumn, randomRow, randomDirection })
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
        makeRandomCoordinates,
    }
}

module.exports = createGameBoard
