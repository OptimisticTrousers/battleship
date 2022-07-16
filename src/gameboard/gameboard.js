
/* eslint-disable no-multi-assign */
/* eslint-disable no-unused-expressions */
const createShip = require('../ship/ship')

/* eslint-disable no-param-reassign */
const createGameBoard = () => {
    const emptyCell = { hasBeenHit: false, isShip: false, offLimits: false }

    let isStartAllowed = false
    
    const initializeBoard = () => {
        const gameBoard = Array(10).fill().map(() => Array(10).fill())
        for(let column= 0; column < 10; column++){
            for(let row= 0; row < 10; row++){
                gameBoard[column][row] = {...emptyCell, column, row}
            }
        }
        return gameBoard
    
    }

    let gameBoard = initializeBoard()

    const ships = [
        createShip(5, 'Carrier'),
        createShip(4, 'Battleship'),
        createShip(3, 'Destroyer'),
        createShip(3, 'Submarine'),
        createShip(2, 'Patrol Boat'),
    ]


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
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
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
        //left
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
        console.log(column -1, row+shipLength)
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
            for (let i = 0; i < shipLength; i++) {
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
            for (let i = 0; i < shipLength; i++) {
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

      // makes tiles around ship "reserved"
  let reserveAround = (pos1, pos2) => {
    function cell(n1, n2) {
      if (pos1 + n1 > 9 || pos1 + n1 < 0) return;
      if (Object.is(gameBoard[pos1 + n1][pos2 + n2], emptyCell))
        gameBoard[pos1 + n1][pos2 + n2].offLimits = true;
    }
    function reserveCell(row) {
      cell(row, -1);
      cell(row, 0);
      cell(row, 1);
    }
    reserveCell(-1);
    reserveCell(0);
    reserveCell(1);
  };

const placeShip = (column, row, direction, ship) => {
    if(gameBoard[column][row].isShip || gameBoard[column][row].offLimits) return false
        const shipLength = ship.getLength()
        if (checkIfLocationIsAShipOrOffLimits(getLocation(column, row, direction, shipLength)))
            return false
        if (direction === 'vertical') {
            if (checkIfRowCoordinateIsValid(row, shipLength)) {
                for (let i = 0; i < shipLength; i += 1) {
                    setLocation(column, row + i, {...ship, position: i})
                    //reserveAround(column, row + i)
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
                    //reserveAround(column + i, row)
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
        const randomDirection =
            Math.floor(Math.random() * 2) === 0 ? 'vertical' : 'horizontal'
        const randomLocation = Math.floor(Math.random() * 100)
        const flattenedGameBoard = availableSpaces()

        const location = flattenedGameBoard[randomLocation]

        if(location.availability === false){
            return makeRandomCoordinates()
        }

        const elementColumn = location.column
        const elementRow = location.row


        return { elementColumn, elementRow, randomDirection }
    }

  // creates a ship with random pos and orientation
  let randomShip = (length) => {
    let pos1 = Math.floor(Math.random() * 10);
    let pos2 = Math.floor(Math.random() * 10);
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

    let randomFleet = () => {
        gameBoard = initializeBoard()
        for(let i = 0; i < 2;) {
            if(randomShip(1) === false) continue 
            i++
        }

        for(let i = 0; i < 2;) {
            if(randomShip(2) === false) continue 
            i++
        }
        for(let i = 0; i < 2;) {
            if(randomShip(3) === false) continue 
            i++
        }
        for(let i = 0; i < 2;) {
            if(randomShip(4) === false) continue 
            i++
        }
    }

    const randomlyPlaceShips = () => {
        const shipDetails = []
        for (let i = 0; i < ships.length; i += 1) {
            const ship = ships[i]
            const { randomColumn, randomRow, randomDirection } =
                makeRandomCoordinates(ship.getLength())
            if (placeShip(randomColumn, randomRow, randomDirection, ship)) {
                shipDetails.push({ randomColumn, randomRow, randomDirection })
            } else {
                i -= 1
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

    const clearBoard  = () => {
        gameBoard = initializeBoard()
    }
     
    const checkIfBoardHasBeenFullyPopulated = () => {

        const flattenedGameBoard = gameBoard.flat()

        let numOfShipCells = 0

        flattenedGameBoard.forEach((location) => {

            if(location.isShip){
                numOfShipCells++
            }
        })

        return numOfShipCells === 20
    }

    const getBoard = () => gameBoard

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
            get: function() {
                return isStartAllowed
            },
            set: function(value) {
                isStartAllowed = value
            }
        }
    }
}
module.exports = createGameBoard