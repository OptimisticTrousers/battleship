const createPlayer = require('./player')

describe('player factory function', () => {
    test('testing if the player can shoot the enemy gameboard', () => {
        expect(createPlayer().attack('A1'))
    })
    test('testing if the player can shoot a spot on the gameboard that has already been shot', () => {
        
        expect(createPlayer().attack('A1'))
    })
})