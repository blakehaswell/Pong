var PlayingCourt = function () {
    
};

PlayingCourt.prototype.init = function () {
    
    // Create the playing court.
    var $playingCourt = $('<div id="playingCourt"></div>');
    
    // Set the dimensions.
    $playingCourt.width(640).height(480);
    
    // Insert on the page.
    $playingCourt.appendTo('body');
    
};

PlayingCourt.prototype.isBallInOpenPlayArea = function (ball) {
    
    var openPlayArea = {
        x: [ 0 + 16, 640 - 16 ],
        y: [ 0 + 16, 480 - 16 ]
    };
    
    if (ball.position.x > (openPlayArea.x[0] + (ball.size / 2)) && ball.position.x < (openPlayArea.x[1] - (ball.size / 2))
            && ball.position.y > (openPlayArea.y[0] + (ball.size / 2)) && ball.position.y < (openPlayArea.y[1] - (ball.size / 2))) {
        return true;
    } else {
        return false;
    }
    
};