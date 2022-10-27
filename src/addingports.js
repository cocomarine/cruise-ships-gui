const form = document.querySelector('#port-form');
const inputPort = document.querySelector('#port-name');
const addPort = document.querySelector('#add-button');
const setItinerary = document.querySelector('#itin-button')
const eMsg = document.querySelector('#error-message');

addPort.addEventListener('click', (event) => {

    if (inputPort.value == '') {
        eMsg.innerHTML = 'Input port name.';
        setTimeout(() => {
            eMsg.innerHTML = '';
        }, 1000);
    } else {
    const port = new Port(inputPort.value);
    itinerary.ports.push(port);

    // preventing form from submitting
    event.preventDefault();
    } 
});

setItinerary.addEventListener('click', () => {
    
    if (itinerary.ports.length == 0) {
        eMsg.innerHTML = 'Input ports before setting itinerary.'
        setTimeout(() => {
            eMsg.innerHTML = '';
          }, 1000);
    } else {
        ship = new Ship(itinerary);
        controller = new Controller (ship);

        controller.renderPorts(itinerary.ports);
        controller.renderShip();
    }

});