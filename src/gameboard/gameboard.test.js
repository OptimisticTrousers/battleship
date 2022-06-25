/* eslint-disable no-undef */
const createGameBoard = require('./gameboard')
const createShip = require('../ship/ship')

describe('gameboard factory function', () => {
    test('get location', () => {
        const gameBoard = createGameBoard()

        const ship = createShip(3)
        const [column, row] = [0, 0]
        gameBoard.placeShip(column, row, 'vertical', ship)

        expect(gameBoard.getShotLocation(column, row)).toEqual(ship)
    })
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
    test('the placeShip function works', () => {
        const gameBoard = createGameBoard()
        const [column, row] = [1, 1]
        gameBoard.placeShip(column, row, 'vertical', createShip(3))
        expect(gameBoard.getShotLocation(column, row).isShip).toBe(true)
    })
    test('the receiveAttack function hits a ship', () => {
        const gameBoard = createGameBoard()
        const [column, row] = [0, 3]
        gameBoard.placeShip(column, row, 'vertical', createShip(3))
        gameBoard.receiveAttack(column, row)
        expect(gameBoard.getShotLocation(column, row).hasBeenHit).toBe(true)
    })
    test('the receiveAttack function does not hit a ship', () => {
        const gameBoard = createGameBoard()
        const [column, row] = [9, 8]
        gameBoard.placeShip(column, row, 'vertical', createShip(2))
        gameBoard.receiveAttack(column, row)
        const shotLocation = gameBoard.getShotLocation(column, row)
        expect(shotLocation.isShip === false && shotLocation.hasBeenHit === true).toBe(true)
    })
    test('all of the ships have sunk', () => {
        const gameBoard = createGameBoard()
        expect(gameBoard.checkIfAllShipsHaveSunk()).toBe(true)
    })
    test('all of the ships have not sunk', () => {
        const gameBoard = createGameBoard()
        const [column, row] = [0, 3]
        gameBoard.placeShip(column, row, 'vertical', createShip(3))
        expect(gameBoard.checkIfAllShipsHaveSunk()).toBe(false)
    })
})
