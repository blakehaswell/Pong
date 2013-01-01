var Pong = function () {
    
};

Pong.prototype.init = function () {
    
    // Create playing court.
    var playingCourt = new PlayingCourt();
    playingCourt.init();
    
    // Create paddles.
    $('<div class="paddle" id="paddle_playerOne"></div>').appendTo('body');
    $('<div class="paddle" id="paddle_playerTwo"></div>').appendTo('body');
    
    // Call gameLoop() every 50ms.
    setInterval(this.gameLoop, 50);
    
};

Pong.prototype.gameLoop = function () {
    
};