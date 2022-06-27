/* eslint-disable no-undef */
const createGameBoard = require('./gameboard')
const createShip = require('../ship/ship')
const createPlayer = require('../player/player')

describe('gameboard factory function', () => {
    describe('#getLocation', () => {
        test('placing a ship, then getting the ship location', () => {
            const gameBoard = createGameBoard()

            const ship = createShip(3)
            const [column, row] = [0, 0]
            gameBoard.placeShip(column, row, 'vertical', ship)

            expect(gameBoard.getLocation(column, row)).toMatchObject(ship)
        })
    })
    describe('#randomlyPlaceShips', () => {
        test('randomly place ships all over the board', () => {
            const gameBoard = createGameBoard()
            const coordinates = gameBoard.randomlyPlaceShips()
            let hasCorrectlyPlacedShipsRandomly = true
            // eslint-disable-next-line no-restricted-syntax
            for (let i = 0; i < coordinates.length; i += 1) {
                const { randomColumn, randomRow } = coordinates[i]
                const location = gameBoard.getLocation(randomColumn, randomRow)
                if (location.isShip === false) {
                    expect([location, i]).toBe(true)
                    hasCorrectlyPlacedShipsRandomly = false
                    break
                }
            }
            expect(hasCorrectlyPlacedShipsRandomly).toBe(true)
        })
    })
    describe('#checkIfOffLimitZoneWasCorrectlyImplemented', () => {
        test('correctly place off limit zone around ship', () => {
            const gameBoard = createGameBoard()

            const shipLength = 5

            gameBoard.placeShip(0, 0, 'vertical', createShip(shipLength))

            expect(
                gameBoard.checkIfOffLimitZoneWasCorrectlyImplemented(shipLength)
            ).toBe(true)
        })
    })
    describe('#placeShip', () => {
        test('placing a ship vertically', () => {
            const gameBoard = createGameBoard()
            const [column, row] = [1, 1]
            gameBoard.placeShip(column, row, 'vertical', createShip(3))
            expect(gameBoard.getLocation(1, 1).isShip).toBe(true)
        })
        test('placing a ship horizontally', () => {
            const gameBoard = createGameBoard()
            const [column, row] = [1, 1]
            gameBoard.placeShip(column, row, 'horizontal', createShip(3))
            expect(gameBoard.getLocation(2, 1).isShip).toBe(true)
        })
    })
    describe('#receiveAttack', () => {
        test('hitting a ship on attack', () => {
            const gameBoard = createGameBoard()
            const [column, row] = [0, 3]
            gameBoard.placeShip(column, row, 'vertical', createShip(3))
            gameBoard.receiveAttack(column, row)
            const shotLocation = gameBoard.getLocation(column, row)
            expect(
                shotLocation.hasBeenHit === true && shotLocation.isShip === true
            ).toBe(true)
        })
        test('missing a ship on attack', () => {
            const gameBoard = createGameBoard()
            const [column, row] = [5, 0]
            gameBoard.receiveAttack(column, row)
            const shotLocation = gameBoard.getLocation(column, row)
            expect(
                shotLocation.isShip === false &&
                    shotLocation.hasBeenHit === true
            ).toBe(true)
        })
    })
    describe('#checkIfAllShipsHaveSunk', () => {
        test('all of the ships have sunk', () => {
            const gameBoard = createGameBoard()
            const player = createPlayer()
            const [firstColumn, firstRow]= [0, 0]
            const [secondColumn, secondRow]= [3, 4]
            const [thirdColumn, thirdRow]= [6, 7]
            const [fourthColumn, fourthRow]= [9, 1]
            const [fifthColumn, fifthRow]= [5, 9]
            gameBoard.placeShip(firstColumn, firstRow, 'horizontal', createShip(1))
            gameBoard.placeShip(secondColumn, secondRow, 'horizontal', createShip(1))
            gameBoard.placeShip(thirdColumn, thirdRow, 'horizontal', createShip(1))
            gameBoard.placeShip(fourthColumn, fourthRow, 'vertical', createShip(1))
            gameBoard.placeShip(fifthColumn, fifthRow, 'horizontal', createShip(1))

            player.attack(firstColumn, firstRow, gameBoard)
            player.attack(secondColumn, secondRow, gameBoard)
            player.attack(thirdColumn, thirdRow, gameBoard)
            player.attack(fourthColumn, fourthRow, gameBoard)
            player.attack(fifthColumn, fifthRow, gameBoard)
            expect(gameBoard.checkIfAllShipsHaveSunk()).toBe(true)
        })
        test('a ship being hit, but not sunk', () => {
            const gameBoard = createGameBoard()
            const [column, row] = [0, 3]
            gameBoard.placeShip(column, row, 'vertical', createShip(3))
            gameBoard.receiveAttack(column, row)
            expect(gameBoard.checkIfAllShipsHaveSunk()).toBe(false)
        })
        test('all of the ships have not sunk', () => {
            const gameBoard = createGameBoard()
            const [column, row] = [0, 3]
            gameBoard.placeShip(column, row, 'vertical', createShip(3))
            expect(gameBoard.checkIfAllShipsHaveSunk()).toBe(false)
        })
    })
})
