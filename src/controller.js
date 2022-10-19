(function exportController () {
    function Controller () {
    this.initialiseSea();
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
        }
    };
    
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Controller;
    } else {
        window.Controller = Controller;
    };
}());