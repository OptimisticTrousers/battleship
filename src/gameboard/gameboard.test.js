/* eslint-disable no-undef */
const createGameBoard = require('./gameboard')

describe('gameboard factory function', () => {
    test('if the receiveAttack function hits a ship', () => {
        const gameBoard = createGameBoard()
        gameBoard.receiveAttack(0, 3)
        expect(gameBoard.hasLastAttackHitShip(0, 3)).toBe(true)
    })
    test('if the receiveAttack function does not hit a ship', () => {

        const gameBoard = createGameBoard()
        gameBoard.receiveAttack(0, 1)
        expect(gameBoard.hasLastAttackHitShip(0, 1)).toBe(false)
    })
    test('if all of the ships have sunk', () => {

        const gameBoard = createGameBoard()
        expect(gameBoard.checkIfAllShipsHaveSunk()).toBe(true)
    })
    test('if all of the ships have not sunk', () => {

        const gameBoard = createGameBoard()
        gameBoard.populateBoard()
        expect(gameBoard.checkIfAllShipsHaveSunk()).toBe(false)
    })
})
