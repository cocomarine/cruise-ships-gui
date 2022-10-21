(function exportController () {
    function Controller (ship) {
        this.ship = ship;
        this.initialiseSea();
        
        document.querySelector('#sailbutton').addEventListener('click', () => {
            this.setSail();
        });
    };  

    Controller.prototype = {
        initialiseSea() {
            const backgroundImg = [
                './images/water0.png',
                './images/water1.png'
            ];
            
            let backgroundIndex = 0;

            function switchingImg() {
                document.querySelector("#viewport").style.backgroundImage = `url('${backgroundImg[backgroundIndex % backgroundImg.length]}')`;
                backgroundIndex += 1;
            };
            
            window.setInterval(switchingImg, 1000);
        },
        renderPorts(ports) {
            const portsElement = document.querySelector("#ports");
            portsElement.style.width = '0px';

            ports.forEach((port, index) => {
                const newPortElement = document.createElement('div');
                newPortElement.className = 'port';

                newPortElement.dataset.portName = port.name;
                newPortElement.dataset.portIndex = index;

                portsElement.appendChild(newPortElement);

                const portsElementWidth = parseInt(portsElement.style.width, 10);
                portsElement.style.width = `${portsElementWidth + 256}px`;

            });
        },
        renderShip() {
            const ship = this.ship;
            const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
            const portElement = document.querySelector(`[data-port-index='${currentPortIndex}']`);

            const shipElement = document.querySelector('#ship');
            shipElement.style.top = `${portElement.offsetTop + 20}px`;
            shipElement.style.left = `${portElement.offsetLeft - 32}px`;
        },
        setSail() {
            const ship = this.ship;
            const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
            const nextPortElement = document.querySelector(`[data-port-index='${currentPortIndex + 1}']`);

            if (!nextPortElement) {
                return alert("End of the line!");
            }

            this.renderMessage(`Now departing ${ship.currentPort.name}`);

            const shipElement = document.querySelector('#ship');
            const sailInterval = setInterval(() => {
                const shipLeft = parseInt(shipElement.style.left, 10);
                if (shipLeft === (nextPortElement.offsetLeft - 32)) {
                    ship.setSail();
                    ship.dock();
                    this.renderMessage(`Now arrived at ${ship.currentPort.name}`);
                    clearInterval(sailInterval);
                }
                shipElement.style.left = `${shipLeft + 1}px`;
            }, 20);
        },
        renderMessage(message) {
            const messageElement = document.createElement('div');
            messageElement.id = 'message';
            messageElement.innerHTML = message;

            const viewport = document.querySelector("#viewport");
            viewport.appendChild(messageElement);

            setTimeout(() => {
                viewport.removeChild(messageElement);
            }, 2000);
        }
    };
    
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Controller;
    } else {
        window.Controller = Controller;
    };
}());