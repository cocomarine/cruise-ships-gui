
function Port(name) {
    this.name = name;
    this.ships = [];
};

Port.prototype = {
    addShip(ship) {
        this.ships.push(ship);
    },
    removeShip(ship) {
        const indexofShip = this.ships.indexOf(ship);
        this.ships.splice(indexofShip, 1);
    }
};

module.exports = Port;