/* eslint-disable no-undef */
const createGameBoard = require('./gameboard')
const createShip = require('../ship/ship')

describe('gameboard factory function', () => {
    describe('#getShotLocation', () => {
        test('placing a ship, then getting the ship location', () => {
            const gameBoard = createGameBoard()

            const ship = createShip(3)
            const [column, row] = [0, 0]
            gameBoard.placeShip(column, row, 'vertical', ship)

            expect(gameBoard.getShotLocation(column, row)).toMatchObject(ship)
        })
    })
    describe('#randomlyPlaceShips', () => {
        test('randomly place ships all over the board', () => {
            const gameBoard = createGameBoard()
            const coordinates = gameBoard.randomlyPlaceShips()
            let hasCorrectlyPlacedShipsRandomly = true
            // eslint-disable-next-line no-restricted-syntax
            for (let i = 0; i < coordinates.length; i += 1) {
                if (
                    gameBoard.getShotLocation(
                        coordinates[i].randomColumn,
                        coordinates[i].randomRow
                    ).isShip === false
                ) {
                    hasCorrectlyPlacedShipsRandomly = false
                    // eslint-disable-next-line no-continue
                    break
                }
            }
            expect(hasCorrectlyPlacedShipsRandomly).toBe(true)
        })
    })
    describe('#placeShip', () => {
        test('placing a ship vertically', () => {
            const gameBoard = createGameBoard()
            const [column, row] = [1, 1]
            gameBoard.placeShip(column, row, 'vertical', createShip(3))
            expect(gameBoard.getShotLocation(1, 1).isShip).toBe(true)
        })
        test('placing a ship horizontally', () => {
            const gameBoard = createGameBoard()
            const [column, row] = [1, 1]
            gameBoard.placeShip(column, row, 'horizontal', createShip(3))
            expect(gameBoard.getShotLocation(2, 1).isShip).toBe(true)
        })
    })
    describe('#receiveAttack', () => {
        test('hitting a ship on attack', () => {
            const gameBoard = createGameBoard()
            const [column, row] = [0, 3]
            gameBoard.placeShip(column, row, 'vertical', createShip(3))
            gameBoard.receiveAttack(column, row)
            const shotLocation = gameBoard.getShotLocation(column, row)
            expect(shotLocation.hasBeenHit === true && shotLocation.isShip === true).toBe(true)
        })
        test('missing a ship on attack', () => {
            const gameBoard = createGameBoard()
            const [column, row] = [5, 0]
            gameBoard.receiveAttack(column, row)
            const shotLocation = gameBoard.getShotLocation(column, row)
            expect(
                shotLocation.isShip === false &&
                    shotLocation.hasBeenHit === true 
            ).toBe(true)
        })
    })
    describe('#checkIfAllShipsHaveSunk', () => {
        test('all of the ships have sunk', () => {
            const gameBoard = createGameBoard()
            expect(gameBoard.checkIfAllShipsHaveSunk()).toBe(true)
        })
        test('a ship being hit, but not sunk', () => {
            const gameBoard = createGameBoard()
            const [column, row] = [0, 3]
            gameBoard.placeShip(column, row, 'vertical', createShip(3))
            gameBoard.receiveAttack(column, row)
            expect(gameBoard.checkIfAllShipsHaveSunk()).toBe(false)
        })
        test('all of the ships have not sunk', () => {
            const gameBoard = createGameBoard()
            const [column, row] = [0, 3]
            gameBoard.placeShip(column, row, 'vertical', createShip(3))
            expect(gameBoard.checkIfAllShipsHaveSunk()).toBe(false)
        })
    })
})
