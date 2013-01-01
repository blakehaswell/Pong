var Pong = function () {
    
};

Pong.prototype.init = function () {
    
    // Create playing court.
    var playingCourt = new PlayingCourt();
    playingCourt.init();
    
    // Create paddles.
    var paddles = [
        new Paddle({
            name: 'playerOne',
            height: 128,
            position: {
                x: 88,
                y: 240
            },
            controls: {
                up: 97,
                down: 122
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
                up: 107,
                down: 109
            }
        })
    ];
    
    // Initialise the paddles.
    $.each(paddles, function (index, paddle) {
        paddle.init();
    });
    
    // Call gameLoop() every 50ms.
    setInterval(this.gameLoop, 50);
    
};

Pong.prototype.gameLoop = function () {
    
};