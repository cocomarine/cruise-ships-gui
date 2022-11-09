const Port = require('../src/port');

describe('Port', () => {
    let artemis;
    let voyage;
    let dover;

    beforeEach(() => {
        artemis = jest.fn();
        voyage = jest.fn();
        dover = new Port('Dover');
    });
    describe('with ships and ports', () => {
        it('instantiate a port object', () => {
            expect(dover).toBeInstanceOf(Object);
        });
    
        it('sets the name property', () => {
            expect(dover.name).toEqual('Dover');
        });

        it('sets the ships property', () => {
            expect(dover.ships).toEqual([]);
        });

        it('add ship to port', () => {    
            dover.addShip(artemis);
            
            expect(dover.ships).toContain(artemis);
        });

        it('remove ship from port', () => {
            dover.addShip(artemis);
            dover.addShip(voyage);
            dover.removeShip(voyage);
    
            expect(dover.ships).not.toContain(voyage);
        });
    });
});