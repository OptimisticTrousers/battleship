const createShip = require('./ship')

/* eslint-disable no-undef */
describe('ship factory function', () => {
    describe('#getLength', () => {
        test('initializing the ship and returning the length', () => {
            expect(createShip(3).getLength()).toBe(3)
        })
    })
    describe('#hit', () => {
        test('hitting the first index of the ship', () => {
            const ship = createShip(5)
            ship.hit(0)
            expect(ship.getStatus()).toEqual([
                'hit',
                'unhit',
                'unhit',
                'unhit',
                'unhit',
            ])
        })
        test('hitting an index that is out of bounds for the ship', () => {
            const ship = createShip(5)
            ship.hit(5)
            expect(
                ship
                    .getStatus()
                    .toEqual(['unhit', 'unhit', 'unhit', 'unhit', 'unhit'])
            )
        })
    })
    describe('#getStatus', () => {
        test('when the ship is not hit', () => {
            const ship = createShip(3)
            expect(
                ship.getStatus().find((position) => position === 'unhit')
            ).toBe('unhit')
        })
    })
    describe('#isSunk', () => {
        test('when ship should not be sunk', () => {
            expect(createShip(2).isSunk()).toBe(false)
        })
        test('when ship should be sunk', () => {
            const ship = createShip(2)
            ship.hit(0)
            ship.hit(1)
            expect(ship.isSunk()).toBe(true)
        })
    })
})
