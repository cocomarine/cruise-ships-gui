const Ship = require('../src/ship.js');

describe('Ship', () => {
    let dover;
    let venice;
    let itinerary;
    let ship;
    
    beforeEach(() => {
        dover = {
            addShip: jest.fn(),
            removeShip: jest.fn(),
            name: 'Dover',
            ships: []
        };

        venice = {
            addShip: jest.fn(),
            removeShip: jest.fn(),
            name: 'Venice',
            ships: []
        };

        itinerary = {
            ports: [dover, venice]
        };

        ship = new Ship(itinerary);  
    });
    describe('with ports and an itinerary', () => {
        it('returns a ship object', () => {
            expect(ship).toBeInstanceOf(Object);
        });

        it('has a starting point', () => {            
            expect(ship.currentPort).toBe(dover);
        });

        it('has a previous port', () => {            
            expect(ship.previousPort).toBeNull();
        });

        it('can set sail', () => {
            ship.setSail();                       
    
            expect(ship.currentPort).toBeFalsy(); 
            expect(dover.removeShip).toHaveBeenCalledWith(ship);
        });

        it('get added to port on instantiation', () => {            
            expect(dover.addShip).toHaveBeenCalledWith(ship);
        });

        it('sets a previous port property on the ship to the current port', () => {
            ship.setSail();

            expect(ship.currentPort).toBeNull();
        });

        it('throws an error when sailing further than the last port in itinerary', () => {
            ship.setSail();
            ship.dock();
    
            expect(() => ship.setSail()).toThrow('Reached end of itinerary');
        });

        it('can dock at a different port', () => {
            ship.setSail();
            ship.dock();
    
            expect(ship.currentPort).toBe(venice);
            expect(venice.addShip).toHaveBeenCalledWith(ship);
        });
    });
});
