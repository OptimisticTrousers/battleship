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
        const [column, row] = [0, 7]
        player.attack(column, row, computer)
        expect(computerBoard.getShotLocation(column, row).isShip).toBe(false)
    })
    test('the computer can shoot the player', () => {
        const computer = createPlayer('Computer')
        const player = createPlayer('Human')
        const playerBoard = player.getBoard()
        const [column, row] = [5, 3]
        playerBoard.placeShip(column, row, 'horizontal', createShip(5))
        computer.attack(column, row, player)
        expect(playerBoard.getShotLocation(column, row).hasBeenHit).toBe(true)
    })
    test('the computer missed the player', () => {
        const computer = createPlayer('Computer')
        const player = createPlayer('Human')
        const computerBoard = computer.getBoard()
        const [column, row] = [0, 1]
        computer.attack(column, row, player)
        expect(computerBoard.getShotLocation(column, row).hasBeenHit).toBe(false)
    })
    test('the player can shoot a spot on the gameboard that has already been shot', () => {
        const computer = createPlayer('Computer')
        const player = createPlayer('Human')
        const [column, row] = [9, 9]
        player.attack(column, row, computer)
        expect(player.attack(column, row, computer)).toBe(
            'You have already hit this spot!'
        )
    })
})
