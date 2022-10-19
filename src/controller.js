function Controller () {
    this.initialiseSea();
};

Controller.prototype.initialiseSea = function initialiseSea() {
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