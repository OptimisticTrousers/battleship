/* eslint-disable no-undef */
const createGameBoard = require('./gameboard')

describe('gameboard factory function', () => {
    test('if the receiveAttack function hits a ship', () => {
        const gameBoard = createGameBoard()
        gameBoard.receiveAttack('A', 3)
        expect(gameBoard.hasLastAttackHitShip('A', 3)).toBe(true)
    })
    test('if the receiveAttack function does not hit a ship', () => {

        const gameBoard = createGameBoard()
        gameBoard.receiveAttack('A', 1)
        expect(gameBoard.hasLastAttackHitShip('A', 1)).toBe(false)
    })
    test('if all of the ships have sunk', () => {

        const gameBoard = createGameBoard()
        gameBoard.sinkAllShips()
        expect(gameBoard.checkIfAllShipsHaveSunk()).toBe(true)
    })
})
