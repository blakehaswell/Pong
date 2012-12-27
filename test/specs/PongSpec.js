describe('The init method', function () {
    
    var pong;
    
    beforeEach(function () {
        
        // Create a new game.
        pong = new Pong();
        
    });
    
    afterEach(function () {
        
        // Delete HTML elements.
        $('#playingCourt').remove();
        $('.paddle').remove();
        
    });
    
    it('calls the game loop method every 50ms', function () {
        
        // Setup a spy on pong.gameLoop.
        spyOn(pong, 'gameLoop');
        
        // Mock the clock. (Poet. Didn't know it. etc.)
        jasmine.Clock.useMock();
        
        // Initialise the game.
        pong.init();
        
        // Verify.
        jasmine.Clock.tick(50);
        expect(pong.gameLoop.calls.length).toEqual(1);
        jasmine.Clock.tick(50);
        expect(pong.gameLoop.calls.length).toEqual(2);
        jasmine.Clock.tick(50 * 4);
        expect(pong.gameLoop.calls.length).toEqual(6);
        
    });
    
    it('creates a playing court', function () {
        
        // Initialise the game.
        pong.init();
        
        // Verify that the court was created.
        var playingCourt = $('#playingCourt');
        expect(playingCourt.length).toEqual(1);
        
    });
    
    it('creates 2 paddles', function () {
        
        // Initialise the game.
        pong.init();
        
        // Verify that the paddles were created.
        var paddles = $('.paddle');
        expect(paddles.length).toEqual(2);
        var playerOnePaddle = paddles.filter('#paddle_playerOne');
        expect(playerOnePaddle.length).toEqual(1);
        var playerTwoPaddle = paddles.filter('#paddle_playerTwo');
        expect(playerTwoPaddle.length).toEqual(1);
        
    });
    
});