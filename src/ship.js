

function Ship (itinerary) {
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
    this.currentPort.addShip(this);
  }

Ship.prototype = {
    setSail() {
        const currentPortIndex = this.itinerary.ports.indexOf(this.currentPort);

        if (currentPortIndex == (this.itinerary.ports.length - 1)) {
            throw new Error('Reached end of itinerary');
        } 
    
        this.previousPort = this.currentPort;
        this.currentPort = null;
        this.previousPort.removeShip(this);
    },
    dock() {
        const previousPortIndex = this.itinerary.ports.indexOf(this.previousPort);
        this.currentPort = this.itinerary.ports[previousPortIndex + 1];
        this.currentPort.addShip(this);
    }
};

module.exports = Ship;