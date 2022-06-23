const createShip = require('./ship')

/* eslint-disable no-undef */
describe('ship factory function', () => {
    test('ship length method', () => {
        expect(createShip(3).getLength() === 3)
    })
    test('damaging the ship using the hit() method', () => {
        const ship = createShip(5)
        ship.hit(1)
        expect(
            ship.getStatus() ===
                ['hit', 'undamaged', 'undamaged', 'undamaged', 'undamaged']
        )
    })
    test('checking if the ship has sunk without having gotten hit', () => {
        expect(createShip(2).isSunk() === false)
    })
    test('checking if the ship sinks when all positions are hit', () => {
        const ship = createShip(2)
        ship.hit(1)
        ship.hit(2)
        expect(ship.isSunk() === true)
    })
})
