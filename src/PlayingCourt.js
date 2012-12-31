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
        x1: 0 + 16,
        x2: 640 - 16,
        y1: 0 + 16,
        y2: 480 - 16
    };
    
    var ballPosition = new BallPositionReporter(ball);
    
    if (ballPosition.isRightOf(openPlayArea.x1) && ballPosition.isLeftOf(openPlayArea.x2)
            && ballPosition.isBelow(openPlayArea.y1) && ballPosition.isAbove(openPlayArea.y2)) {
        return true;
    } else {
        return false;
    }
    
};

PlayingCourt.prototype.isBallInPlayer1GoalArea = function (ball) {
    
    var goalArea = {
        x: 0 + 16,
        y1: 160,
        y2: 320
    };
    
    var ballPosition = new BallPositionReporter(ball);
    
    if (!ballPosition.isRightOf(goalArea.x) && ballPosition.isBelow(goalArea.y1 - 1) && ballPosition.isAbove(goalArea.y2 + 1)) {
        return true;
    } else {
        return false;
    }
    
};

PlayingCourt.prototype.isBallInPlayer2GoalArea = function (ball) {
    
    var goalArea = {
        x: 640 - 16,
        y1: 160,
        y2: 320
    };
    
    var ballPosition = new BallPositionReporter(ball);
    
    if (!ballPosition.isLeftOf(goalArea.x) && ballPosition.isBelow(goalArea.y1 - 1) && ballPosition.isAbove(goalArea.y2 + 1)) {
        return true;
    } else {
        return false;
    }
    
};