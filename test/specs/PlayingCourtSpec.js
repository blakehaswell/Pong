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
    
    beforeEach(function () {
        
        // Create the playing court.
        playingCourt = new PlayingCourt();
        
    });
    
    it('can determine if the ball is within the open play area', function () {
        
        // Create mock balls.
        var MockBall = function (position) {
            this.size = 16;
            this.position = position;
        }
        
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
    
});