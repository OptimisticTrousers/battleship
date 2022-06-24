/* eslint-disable no-undef */
const createGameBoard = require('./gameboard')
const createShip = require('../ship/ship')

describe('gameboard factory function', () => {
    test('if the receiveAttack function hits a ship', () => {
        const gameBoard = createGameBoard()
        gameBoard.placeShip(0, 3, 'vertical', createShip(3))
        gameBoard.receiveAttack(0, 3)
        expect(gameBoard.hasLastAttackHitShip(0, 3)).toBe(true)
    })
    test('if the receiveAttack function does not hit a ship', () => {
        const gameBoard = createGameBoard()
        gameBoard.placeShip(0, 3, 'vertical', createShip(3))
        gameBoard.receiveAttack(0, 2)
        expect(gameBoard.hasLastAttackHitShip(0, 2)).toBe(false)
    })
    test('if the placeShip function works', () => {

        const gameBoard = createGameBoard()
        gameBoard.placeShip(1, 1, 'vertical', createShip(3));
        expect(gameBoard.getShotLocation(1, 1).isShip).toBe(true)
    })
    test('if all of the ships have sunk', () => {

        const gameBoard = createGameBoard()
        expect(gameBoard.checkIfAllShipsHaveSunk()).toBe(true)
    })
    test('if all of the ships have not sunk', () => {

        const gameBoard = createGameBoard()
        gameBoard.randomlyPlaceShips()
        expect(gameBoard.checkIfAllShipsHaveSunk()).toBe(false)
    })
})
