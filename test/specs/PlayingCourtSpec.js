describe('The init method', function () {
    
    it('creates a playing court with dimensions of 640x480', function () {
        
        // Create and initialise the playing court.
        var playingCourt = new PlayingCourt();
        playingCourt.init();
        
        // Get the playing court element.
        var $playingCourt = $('#playingCourt');
        
        // Verify that the court was created.
        expect($playingCourt.length).toEqual(1);
        
        // Verify that the dimensions are correct.
        expect($playingCourt.width()).toEqual(640);
        expect($playingCourt.height()).toEqual(480);
        
    });
    
});

describe('The playing court', function () {
    
    var playingCourt;
    
    // Create a mock ball constructor.
    var MockBall = function (position) {
        this.size = 16;
        this.position = position;
    };
    
    beforeEach(function () {
        
        // Create the playing court.
        playingCourt = new PlayingCourt();
        
    });
    
    it('can determine if the ball is within the open play area', function () {
        
        // Create mock balls.
        var illegalBalls = [
            new MockBall({ x: 24, y: 24 }),
            new MockBall({ x: 24, y: 240 }),
            new MockBall({ x: 240, y: 24 }),
            new MockBall({ x: 616, y: 456 }),
            new MockBall({ x: 616, y: 45 }),
            new MockBall({ x: 61, y: 456 })
        ];
        
        var legalBalls = [
            new MockBall({ x: 25, y: 25 }),
            new MockBall({ x: 25, y: 240 }),
            new MockBall({ x: 240, y: 25 }),
            new MockBall({ x: 615, y: 455 }),
            new MockBall({ x: 615, y: 45 }),
            new MockBall({ x: 61, y: 455 })
        ];
        
        // Verify that illegal balls are not in open play area.
        $.each(illegalBalls, function (index, ball) {
            expect(playingCourt.isBallInOpenPlayArea(ball)).toBeFalsy();
        });
        
        // Verify that legal balls are in open play area.
        $.each(legalBalls, function (index, ball) {
            expect(playingCourt.isBallInOpenPlayArea(ball)).toBeTruthy();
        });
        
    });
    
    it('can determine if the ball is in the goal area', function () {
        
        // Create mock balls.
        var ballsOutsideOfGoal = [
            new MockBall({ x: 24, y: 167 }),
            new MockBall({ x: 24, y: 313 }),
            new MockBall({ x: 25, y: 240 }),
            new MockBall({ x: 616, y: 167 }),
            new MockBall({ x: 616, y: 313 }),
            new MockBall({ x: 615, y: 240 })
        ];
        
        var ballsInPlayer1Goal = [
            new MockBall({ x: 24, y: 168 }),
            new MockBall({ x: 24, y: 312 }),
            new MockBall({ x: 24, y: 240 })
        ];
        
        var ballsInPlayer2Goal = [
            new MockBall({ x: 616, y: 168 }),
            new MockBall({ x: 616, y: 312 }),
            new MockBall({ x: 616, y: 240 })
        ];
        
        // Verify that balls outside of goal are reported correctly.
        $.each(ballsOutsideOfGoal, function (index, ball) {
            expect(playingCourt.isBallInPlayer1GoalArea(ball)).toBeFalsy();
            expect(playingCourt.isBallInPlayer2GoalArea(ball)).toBeFalsy();
        });
        
        // Verify that balls inside of player 1 goal are reported correctly.
        $.each(ballsInPlayer1Goal, function (index, ball) {
            expect(playingCourt.isBallInPlayer1GoalArea(ball)).toBeTruthy();
            expect(playingCourt.isBallInPlayer2GoalArea(ball)).toBeFalsy();
        });
        
        // Verify that balls inside of player 2 goal are reported correctly.
        $.each(ballsInPlayer2Goal, function (index, ball) {
            expect(playingCourt.isBallInPlayer2GoalArea(ball)).toBeTruthy();
            expect(playingCourt.isBallInPlayer1GoalArea(ball)).toBeFalsy();
        });
        
    });
    
});