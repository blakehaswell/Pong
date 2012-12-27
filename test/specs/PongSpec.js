describe('The init method', function () {
    
    it('creates a game loop which is called every 50ms', function () {
        
        // Create a new game.
        var pong = new Pong();
        
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
    
});