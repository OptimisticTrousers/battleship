/* eslint-disable no-undef */
const createPlayer = require('./player')

describe('player factory function', () => {
        const computer = createPlayer('Computer', 'AI')
        const player = createPlayer('Human')
        const computerBoard = computer.getBoard()
        const playerBoard = player.getBoard()
    test('the player can shoot the enemy', () => {
        player.attack('A', 2, computer)
        expect(computerBoard.hasLastAttackHitShip('A', 2)).toBe(true)
    })
    test('the player missed the enemy', () => {
        player.attack('A', 7, computer)
        expect(computerBoard.hasLastAttackHitShip('A', 7)).toBe(false)
    })
    test('the computer can shoot the player', () => {
        computer.attack('B', 9, player)
        expect(playerBoard.hasLastAttackHitShip('B', 9)).toBe(true)
    })
    test('the computer can make a random move', () => {
        const coordinates = computer.makeRandomMoveAgainstEnemy(computer, player)
        expect(playerBoard.getShotLocation(coordinates.randomColumn, coordinates.randomRow).hit).toBe(true)
    })
    test('the computer missed the player', () => {
        computer.attack('A', 1, player)
        expect(computerBoard.hasLastAttackHitShip('A', 1)).toBe(false)
    })
    test('the player can shoot a spot on the gameboard that has already been shot', () => {
        player.attack('J', 9, computer)
        expect(player.attack('J', 9, computer)).toBe('You have already hit this spot!')
    })
    test('the computer can shoot a spot on the gameboard that has already been shot', () => {
        computer.attack('I', 0, player)
        expect(computer.attack('I', 0, player)).toBe('You have already hit this spot!')
    })
    test('the user has a correctly intialized gameBoard', () => {
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
