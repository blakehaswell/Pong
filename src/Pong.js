var Pong = function () {
    
};

Pong.prototype.init = function () {
    
    // Create playing court.
    $('<div id="playingCourt"></div>').appendTo('body');
    
    // Call gameLoop() every 50ms.
    setInterval(this.gameLoop, 50);
    
};

Pong.prototype.gameLoop = function () {
    
};