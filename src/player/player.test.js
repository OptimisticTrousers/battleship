/* eslint-disable no-undef */
const createShip = require('../ship/ship')
const createPlayer = require('./player')
const createGameBoard = require('../gameboard/gameboard')

describe('player factory function', () => {
    describe('#getName', () => {
        test('returning the name of the player', () => {
            const player = createPlayer('bob')
            expect(player.getName()).toBe('bob')
        })
        test('returning a default name for an unnamed player', () => {
            const player = createPlayer()
            expect(player.getName()).toBe('player')
        })
    })
    describe('#attack', () => {
        test('the player can shoot the enemy', () => {
            const player = createPlayer('Human')
            const computerBoard = createGameBoard()
            computerBoard.placeShip(0, 2, 'vertical', createShip(3))
            player.attack(0, 2, computerBoard)
            expect(computerBoard.getShotLocation(0, 2).hasBeenHit).toBe(true)
        })
        test('the player missed the enemy', () => {
            const player = createPlayer('Human')
            const computerBoard = createGameBoard()
            const [column, row] = [0, 7]
            player.attack(column, row, computerBoard)
            expect(computerBoard.getShotLocation(column, row).isShip).toBe(
                false
            )
        })
        test('the computer can shoot the player', () => {
            const computer = createPlayer('Computer')
            const playerBoard = createGameBoard()
            const [column, row] = [5, 3]
            playerBoard.placeShip(column, row, 'horizontal', createShip(5))
            computer.attack(column, row, playerBoard)
            expect(playerBoard.getShotLocation(column, row).hasBeenHit).toBe(
                true
            )
        })
        test('the computer missed the player', () => {
            const computer = createPlayer('Computer')
            const computerBoard = createGameBoard()
            const playerBoard = createGameBoard()
            const [column, row] = [0, 1]
            computer.attack(column, row, playerBoard)
            expect(computerBoard.getShotLocation(column, row).hasBeenHit).toBe(
                false
            )
        })
        test('the player can shoot a spot on the gameboard that has already been shot', () => {
            const player = createPlayer('Human')
            const computerBoard = createGameBoard()
            const [column, row] = [9, 9]
            player.attack(column, row, computerBoard)
            expect(player.attack(column, row, computerBoard)).toBe(
                'You have already hit this spot!'
            )
        })
    })
})
