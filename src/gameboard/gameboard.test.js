/* eslint-disable no-undef */
const createGameBoard = require('./gameboard')
const createShip = require('../ship/ship')

describe('gameboard factory function', () => {
    test('get location', () => {
        const gameBoard = createGameBoard()

        const ship = createShip(3)
        gameBoard.placeShip(0, 0, 'vertical', ship)

        expect(gameBoard.getShotLocation(0, 0)).toEqual(ship)
    })
    test('randomly place ships all over the board', () => {
        const gameBoard = createGameBoard()
        const coordinates = gameBoard.randomlyPlaceShips()
        let hasCorrectlyPlacedShipsRandomly = false 
        // eslint-disable-next-line no-restricted-syntax
        for (let i = 0; i < coordinates.length; i += 1) {
            if (
                gameBoard.getShotLocation(
                    coordinates[i].randomColumn,
                    coordinates[i].randomRow
                ).isShip === true
            ) {
                hasCorrectlyPlacedShipsRandomly = true
                // eslint-disable-next-line no-continue
                continue;
            }
            hasCorrectlyPlacedShipsRandomly = false
            break;
        }
        expect(hasCorrectlyPlacedShipsRandomly).toBe(true)
    })
    test('the placeShip function works', () => {
        const gameBoard = createGameBoard()
        gameBoard.placeShip(1, 1, 'vertical', createShip(3))
        expect(gameBoard.getShotLocation(1, 1).isShip).toBe(true)
    })
    test('the receiveAttack function hits a ship', () => {
        const gameBoard = createGameBoard()
        gameBoard.placeShip(0, 3, 'vertical', createShip(3))
        gameBoard.receiveAttack(0, 3)
        expect(gameBoard.getShotLocation(0, 3).hasBeenHit).toBe(true)
    })
    test('the receiveAttack function does not hit a ship', () => {
        const gameBoard = createGameBoard()
        gameBoard.placeShip(0, 3, 'vertical', createShip(3))
        gameBoard.receiveAttack(9, 9)
        expect(gameBoard.getShotLocation(0, 3).hasBeenHit).toBe(false)
    })
    test('all of the ships have sunk', () => {
        const gameBoard = createGameBoard()
        expect(gameBoard.checkIfAllShipsHaveSunk()).toBe(true)
    })
    test('all of the ships have not sunk', () => {
        const gameBoard = createGameBoard()
        gameBoard.placeShip(0, 3, 'vertical', createShip(3))
        expect(gameBoard.checkIfAllShipsHaveSunk()).toBe(false)
    })
})
