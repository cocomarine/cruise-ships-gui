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

        };

        renderPorts(ports) {
            const portsElement = document.querySelector("#ports");
            portsElement.style.width = 0px;
        };
    
        if (typeof module !== 'undefined' && module.exports) {
            module.exports = Controller;
        } else {
            window.Controller = Controller;
        };
    };
}());