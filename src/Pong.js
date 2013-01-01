var Pong = function () {
    
};

Pong.prototype.init = function () {
    
    // Create playing court.
    var playingCourt = new PlayingCourt();
    playingCourt.init();
    
    // Create paddles.
    this.paddles = [
        new Paddle({
            name: 'playerOne',
            height: 128,
            position: {
                x: 88,
                y: 240
            },
            controls: {
                up: 65,
                down: 90
            }
        }),
        
        new Paddle({
            name: 'playerTwo',
            height: 128,
            position: {
                x: 552,
                y: 240
            },
            controls: {
                up: 75,
                down: 77
            }
        })
    ];
    
    // Initialise the paddles.
    $.each(this.paddles, function (index, paddle) {
        paddle.init();
    });
    
    // Call gameLoop() every 50ms.
    setInterval($.proxy(this.gameLoop, this), 50);
    
};

Pong.prototype.gameLoop = function () {
    
    // Update the position of the paddles.
    $.each(this.paddles, function (index, paddle) {
        paddle.updatePosition();
    });
    
};