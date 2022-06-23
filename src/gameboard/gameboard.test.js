/* eslint-disable no-undef */
const createGameBoard = require('./gameboard')

describe('gameboard factory function', () => {
    test('if the receiveAttack function hits a ship', () => {
        expect(createGameBoard().receiveAttack('A', 1).hasLastAttackHitShip('A1')).toBe(true)
    })
    test('if the receiveAttack function does not hit a ship', () => {

        expect(createGameBoard().receiveAttack('A', 1).hasLastAttackHitShip('A1')).toBe(false)
    })
    test('if all of the ships have sunk', () => {

        expect(createGameBoard().sinkAllShips().checkIfAllShipsHaveSunk()).toBe(true)
    })
})
