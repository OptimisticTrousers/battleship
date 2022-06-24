/* eslint-disable no-undef */
const createShip = require('../ship/ship')
const createPlayer = require('./player')

describe('player factory function', () => {
    test('the player can shoot the enemy', () => {
        const computer = createPlayer('Computer')
        const player = createPlayer('Human')
        const computerBoard = computer.getBoard()
        computerBoard.placeShip(0, 2, 'vertical', createShip(3))
        player.attack(0, 2, computer)
        expect(computerBoard.getShotLocation(0, 2).hasBeenHit).toBe(true)
    })
    test('the player missed the enemy', () => {
        const computer = createPlayer('Computer')
        const player = createPlayer('Human')
        const computerBoard = computer.getBoard()
        player.attack(0, 7, computer)
        expect(computerBoard.getShotLocation(0, 7).isShip).toBe(false)
    })
    test('the computer can shoot the player', () => {
        const computer = createPlayer('Computer')
        const player = createPlayer('Human')
        const playerBoard = player.getBoard()
        playerBoard.placeShip(5, 3, 'horizontal', createShip(5))
        computer.attack(5, 3, player)
        expect(playerBoard.getShotLocation(5, 3).hasBeenHit).toBe(true)
    })
    test('the computer missed the player', () => {
        const computer = createPlayer('Computer')
        const player = createPlayer('Human')
        const computerBoard = computer.getBoard()
        computer.attack(0, 1, player)
        expect(computerBoard.getShotLocation(0, 1).hasBeenHit).toBe(false)
    })
    test('the player can shoot a spot on the gameboard that has already been shot', () => {
        const computer = createPlayer('Computer')
        const player = createPlayer('Human')
        player.attack(9, 9, computer)
        expect(player.attack(9, 9, computer)).toBe(
            'You have already hit this spot!'
        )
    })
})
