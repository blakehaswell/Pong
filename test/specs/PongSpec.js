describe('The init method', function () {
    
    var pong;
    
    beforeEach(function () {
        
        // Create a new game.
        pong = new Pong();
        
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
        
        // Verify that that court was created.
        var playingCourt = $('#playingCourt');
        expect(playingCourt.length).toEqual(1);
        
    });
    
});