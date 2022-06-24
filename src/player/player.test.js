/* eslint-disable no-undef */
const createPlayer = require('./player')

describe('player factory function', () => {
    test('testing if the player can shoot the enemy', () => {
        const computer = createPlayer()
        const player = createPlayer()
        player.attack('A', 3, computer)
        expect(computer.getBoard().hasLastAttackHitShip('A', 3)).toBe(true)
    })
    test('testing if the player missed the enemy', () => {
        const computer = createPlayer()
        const player = createPlayer()
        player.attack('A', 1, computer)
        expect(computer.getBoard().hasLastAttackHitShip('A', 1)).toBe(false)
    })
    test('testing if the computer can shoot the player', () => {
        const computer = createPlayer()
        const player = createPlayer()
        computer.attack('A', 3, player)
        expect(computer.getBoard().hasLastAttackHitShip('A', 3)).toBe(true)
    })
    test('testing if the computer missed the player', () => {
        const computer = createPlayer()
        const player = createPlayer()
        computer.attack('A', 1, player)
        expect(computer.getBoard().hasLastAttackHitShip('A', 1)).toBe(false)
    })
    test('testing if the player can shoot a spot on the gameboard that has already been shot', () => {
        const computer = createPlayer()
        const player = createPlayer()
        player.attack('A', 1, computer)
        expect(player.attack('A', 1)).toBe('You have already hit this spot!')
    })
    test('testing if the computer can shoot a spot on the gameboard that has already been shot', () => {
        const computer = createPlayer()
        const player = createPlayer()
        computer.attack('A', 1, player)
        expect(computer.attack('A', 1)).toBe('You have already hit this spot!')
    })
    test('if the user has a correctly intialized gameBoard', () => {
        const player = createPlayer()
        const playerGameBoard = player.getBoard()
        expect(playerGameBoard).toEqual({
            sinkAllShips: playerGameBoard.sinkAllShips,
            receiveAttack: playerGameBoard.receiveAttack,
            checkIfAllShipsHaveSunk: playerGameBoard.checkIfAllShipsHaveSunk,
            hasLastAttackHitShip: playerGameBoard.hasLastAttackHitShip,
            getShotLocation: playerGameBoard.getShotLocation,
        })
    })
})
