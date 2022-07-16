/* eslint-disable consistent-return */
/* eslint-disable no-continue */
/* eslint-disable default-case */
// eslint-disable-next-line import/no-cycle
/* eslint-disable no-multi-assign */
/* eslint-disable no-unused-expressions */
const createShip = require('../ship/ship')

/* eslint-disable no-param-reassign */
const createGameBoard = () => {
    const emptyCell = { hasBeenHit: false, isShip: false, offLimits: false }

    let isStartAllowed = false
    
    const initializeBoard = () => {
        const gameBoard = Array(10).fill().map(() => Array(10).fill())
        for(let column= 0; column < 10; column += 1){
            for(let row= 0; row < 10; row += 1){
                gameBoard[column][row] = {...emptyCell, column, row}
            }
        }
        return gameBoard
    
    }

    let gameBoard = initializeBoard()

    const clearBoard  = () => {
        gameBoard = initializeBoard()
    }

    const createOffLimitLocation = () =>
        Object.assign(emptyCell, { offLimits: true })

    const getLocation = (column, row) => gameBoard?.[column]?.[row]

    const setLocation = (column, row, ship = createOffLimitLocation()) => {
        if (gameBoard?.[column]?.[row] === undefined) return true
        const location = gameBoard[column][row]

        gameBoard[column][row] = {...location, ...ship}
        return true
    }
    const checkIfAllShipsHaveSunk = () => {

        let haveAllShipsSunk =true  
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const location = getLocation(i, j)
        if(location.isShip === false) continue
        if(location.isShip && location.isSunk() === false){
           haveAllShipsSunk = false 
           break;
        }
      }
    }
    return haveAllShipsSunk 
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
        // left
        setLocation(column -1, row)
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


    const checkIfLocationIsAShipOrOffLimits = (
        column,
        row,
        direction,
        shipLength
    ) => {
        if (direction === 'vertical') {
            for (let i = 0; i < shipLength; i += 1) {
                const location = getLocation(column, row + i)
                if (location) {
                    if (
                        location.isShip === true &&
                        location.offLimits === true
                    ) {
                        return true
                    }
                }
            }
        }

        if (direction === 'horizontal') {
            for (let i = 0; i < shipLength; i += 1) {
                const location = getLocation(column + i, row)
                if (location) {
                    if (
                        location.isShip === true &&
                        location.offLimits === true
                    ) {
                        return true 
                    }
                }
            }
        }

        return false
    }

const placeShip = (column, row, direction, ship) => {
    if(gameBoard[column][row].isShip || gameBoard[column][row].offLimits) return false
        const shipLength = ship.getLength()
        if (checkIfLocationIsAShipOrOffLimits(getLocation(column, row, direction, shipLength)))
            return false
        if (direction === 'vertical') {
            if (checkIfRowCoordinateIsValid(row, shipLength)) {
                for (let i = 0; i < shipLength; i += 1) {
                    setLocation(column, row + i, {...ship, position: i})
                    // reserveAround(column, row + i)
                    setLocation(column + 1, row + i)
                    setLocation(column - 1, row + i)
                }
                addOffLimitAreaForVerticallyPositionedShip(
                    column,
                    row,
                    shipLength
                )
                return true
            }
        } else if (direction === 'horizontal') {
            if (checkIfColumnCoordinateIsValid(column, shipLength)) {
                for (let i = 0; i < shipLength; i += 1) {
                    setLocation(column + i , row, {...ship, position: i})
                    // reserveAround(column + i, row)
                    setLocation(column + i, row + 1)
                    setLocation(column + i, row - 1)
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
        const availableSpaces = () =>{

        const flattenedGameBoard = [...gameBoard.flat()]

            flattenedGameBoard.forEach((element) => {
                if(element.hasBeenHit === true){
                    element.availability = false
                }
                else{
                    element.availability =true  
                }
            })

            return flattenedGameBoard

        }
    const makeRandomCoordinates = () => {
        const randomLocation = Math.floor(Math.random() * 100)
        const flattenedGameBoard = availableSpaces()

        const location = flattenedGameBoard[randomLocation]

        if(location.availability === false){
            return makeRandomCoordinates()
        }

        const elementColumn = location.column
        const elementRow = location.row


        return [elementColumn, elementRow]
    }
  // creates a ship with random pos and orientation
  const randomShip = (length) => {
    const pos1 = Math.floor(Math.random() * 10);
    const pos2 = Math.floor(Math.random() * 10);
    let dir = Math.round(Math.random());

    if (dir === 0) {
      dir = "horizontal";
      if (placeShip(pos1, pos2, dir, createShip(length)) === false) return false;
    }

    if (dir === 1) {
      dir = "vertical";
      if (placeShip(pos1, pos2, dir, createShip(length)) === false) return false;
    }
  };
  // creates a random fleet of 8 ships
  const randomFleet = () => {
    // create 2 ships of length 1
    for (let i = 0; i < 2; ) {
      if (randomShip(1) === false) continue;
      i += 1;
    }
    // create 2 ships of length 2
    for (let i = 0; i < 2; ) {
      if (randomShip(2) === false) continue;
      i += 1;
    }
    // create 2 ships of length 3
    for (let i = 0; i < 2; ) {
      if (randomShip(3) === false) continue;
      i += 1;
    }
    // create 1 ship of length 4
    for (let i = 0; i < 2; ) {
      if (randomShip(4) === false) continue;
      i += 1;
    }
    isStartAllowed = true
  };

    const randomlyPlaceShips = () => {

    clearBoard()
    const randomPossibility = Math.floor(Math.random() * 10)
    switch(randomPossibility){
        case 0:
            placeShip(1, 1, 'horizontal',createShip(4))
            placeShip(1, 4, 'horizontal', createShip(4))
            placeShip(7, 3, 'horizontal', createShip(3))
            placeShip(2, 7, 'horizonal', createShip(3))
            placeShip(6, 7, 'horizontal', createShip(2))
            placeShip(5, 9, 'horizontal', createShip(2))
            placeShip(8, 1, 'vertical', createShip(1))
            placeShip(9, 5, 'vertical', createShip(1))
            break;
        case 1:
            placeShip(0, 1, 'vertical', createShip(4))
            placeShip(8, 1, 'vertical', createShip(4))
            placeShip(3, 1, 'horizontal', createShip(3))
            placeShip(0, 7, 'vertical', createShip(3))
            placeShip(3, 6, 'horizontal', createShip(2))
            placeShip(8, 7, 'horizontal', createShip(2))
            placeShip(4, 8, 'vertical', createShip(1))
            placeShip(6, 7, 'vertical', createShip(1))
            break;
        case 2:
            placeShip(0, 1, 'horizontal', createShip(4))
            placeShip(0, 3, 'horizontal', createShip(4))
            placeShip(9, 1, 'vertical', createShip(3))
            placeShip(2, 8, 'horizontal', createShip(3))
            placeShip(5, 3, 'vertical', createShip(2))
            placeShip(0, 6, 'vertical', createShip(2))
            placeShip(1, 6, 'vertical', createShip(1))
            placeShip(7, 4, 'vertical', createShip(1))
            break;
        case 3:
            placeShip(0, 0, 'vertical', createShip(4))
            placeShip(9, 0, 'vertical', createShip(4))
            placeShip(0, 5, 'vertical', createShip(3))
            placeShip(3, 1, 'vertical', createShip(3))
            placeShip(5, 1, 'vertical', createShip(2))
            placeShip(7, 1, 'vertical', createShip(2))
            placeShip(4, 7, 'vertical', createShip(1))
            placeShip(8, 7, 'vertical', createShip(1))
            break;
        case 4:
            placeShip(2, 4, 'horizontal', createShip(4))
            placeShip(0, 6, 'vertical', createShip(4))
            placeShip(2, 7, 'horizontal', createShip(3))
            placeShip(6, 6, 'horizontal', createShip(3))
            placeShip(7, 1, 'horizontal', createShip(2))
            placeShip(6, 8, 'horizontal', createShip(2))
            placeShip(2, 1, 'horizontal', createShip(1))
            placeShip(4, 1, 'horizontal', createShip(1))
            break;
        case 5:
            placeShip(1, 3, 'horizontal', createShip(4))
            placeShip(6, 2, 'vertical', createShip(4))
            placeShip(0, 6, 'vertical', createShip(3))
            placeShip(8, 2, 'vertical', createShip(3))
            placeShip(0, 0, 'horizontal', createShip(2))
            placeShip(2, 6, 'horizontal', createShip(2))
            placeShip(9, 6, 'vertical', createShip(1))
            placeShip(5, 9, 'vertical', createShip(1))
            break;
        case 6:
            placeShip(0, 0, 'vertical', createShip(4))
            placeShip(0, 6, 'vertical', createShip(4))
            placeShip(0, 2, 'horizontal', createShip(3))
            placeShip(6, 1, 'horizontal', createShip(3))
            placeShip(8, 3, 'horizontal', createShip(2))
            placeShip(9, 5, 'vertical', createShip(2))
            placeShip(9, 8, 'vertical', createShip(1))
            placeShip(7, 9, 'vertical', createShip(1))
            break;
        case 7:
            placeShip(0, 1, 'vertical', createShip(4))
            placeShip(0, 6, 'vertical', createShip(4))
            placeShip(2, 0, 'horizontal', createShip(3))
            placeShip(6, 0, 'horizontal', createShip(3))
            placeShip(9, 2, 'vertical', createShip(2))
            placeShip(9, 6, 'vertical', createShip(2))
            placeShip(9, 9, 'vertical', createShip(1))
            placeShip(7, 9, 'vertical', createShip(1))
            break;
        case 8:
            placeShip(2, 0, 'vertical', createShip(4))
            placeShip(7, 1, 'vertical', createShip(4))
            placeShip(2, 5, 'horizontal', createShip(3))
            placeShip(6, 7, 'vertical', createShip(3))
            placeShip(1, 9, 'horizontal', createShip(2))
            placeShip(2, 7, 'horizontal', createShip(2))
            placeShip(9, 6, 'vertical', createShip(1))
            placeShip(8, 9, 'vertical', createShip(1))
            break;
        case 9:
            placeShip(0, 0, 'horizontal', createShip(4))
            placeShip(5, 2, 'vertical', createShip(1))
            placeShip(2, 6, 'vertical', createShip(1))
            placeShip(0, 8, 'horizontal', createShip(3))
            placeShip(4, 5, 'vertical', createShip(4))
            placeShip(7, 4, 'horizontal', createShip(2))
            placeShip(6, 6, 'horizontal', createShip(2))
            placeShip(7, 8, 'horizontal', createShip(3))
            break;

        }
    }

    const receiveAttack = (column, row) => {
        gameBoard[column][row].hasBeenHit = true
    }

    const checkIfOffLimitZoneWasCorrectlyImplemented = (shipLength) =>
        gameBoard.flat().filter((element) => element.offLimits === true)
            .length ===
        shipLength + 2
    // adding shipLength plus two because for every increase in the size of ship, the zones covered increase by 2 units

     
    const checkIfBoardHasBeenFullyPopulated = () => {

        const flattenedGameBoard = gameBoard.flat()

        let numOfShipCells = 0

        flattenedGameBoard.forEach((location) => {

            if(location.isShip){
                numOfShipCells += 1
            }
        })

        return numOfShipCells === 20
    }

    return {
        clearBoard,
        checkIfLocationIsAShipOrOffLimits,
        checkIfOffLimitZoneWasCorrectlyImplemented,
        getLocation,
        receiveAttack,
        checkIfAllShipsHaveSunk,
        placeShip,
        randomlyPlaceShips,
        makeRandomCoordinates,
        checkIfBoardHasBeenFullyPopulated,
        randomFleet,
        gameBoard,
        isStartAllowed : {
            get() {
                return isStartAllowed
            },
            set(value) {
                isStartAllowed = value
            }
        }
    }
}
module.exports = createGameBoard