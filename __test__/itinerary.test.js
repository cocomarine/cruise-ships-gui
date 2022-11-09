const Itinerary = require('../src/itinerary');

describe('Itinerary constructor', () => {
    it('instantiate an itinerary object', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });

    it('has ports property', () => {
        const dover = jest.fn();
        const portsmouth = jest.fn();
        const itin = new Itinerary([dover, portsmouth]);
        
        expect(itin.ports).toEqual([dover, portsmouth]);
    });
});