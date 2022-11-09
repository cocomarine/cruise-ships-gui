(function exportPort() {
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

    // if module and module.exports both exist (i.e. we are in the Node.js environment) 
    // then we export Port from the module, 
    // otherwise we attach the Port object to the window object
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Port;
    } else {
        window.Port = Port;
    };
}());
