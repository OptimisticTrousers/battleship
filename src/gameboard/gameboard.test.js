const createGameBoard = require('./gameboard')

describe('gameboard factory function', () => {
    test('if the receiveAttack function hits a ship', () =>{
        expect(createGameBoard().receiveAttack('A1'))
    })
    test('if the receiveAttack function does not hit a ship', () =>{
        expect(createGameBoard().receiveAttack('A1'))
    })
})