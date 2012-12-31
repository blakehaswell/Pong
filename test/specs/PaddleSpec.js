describe('the paddle object', function () {
    
    describe('the init method', function () {
        
        it('creates a paddle element that is 16px wide and has the height and position passed in', function () {
            
        });
        
    });
    
    it('can determine if the ball is touching the paddle', function () {
        
    });
    
    describe('the controls', function () {
        
        it('allow the paddle to be moved up and down', function () {
            
            // Create and initialise a new paddle.
            var paddle = new Paddle({
                controls: {
                    up: 97,
                    down: 122
                }
            });
            paddle.init();
            
            // Store the original paddle position.
            var origPaddlePosition =  paddle.$el.position().top;
            
            // Mock the keypress events.
            var upKeypress = $.Event('keypress');
            upKeypress.which = 97;
            var downKeypress = $.Event('keypress');
            downKeypress.which = 122;
            
            // Verify.
            $(document).trigger(upKeypress);
            expect(paddle.$el.position().top).toEqual(origPaddlePosition - 20);
            $(document).trigger(downKeypress);
            expect(paddle.$el.position().top).toEqual(origPaddlePosition);
            $(document).trigger(downKeypress);
            expect(paddle.$el.position().top).toEqual(origPaddlePosition + 20);
            $(document).trigger(upKeypress);
            expect(paddle.$el.position().top).toEqual(origPaddlePosition);
            
        });
        
    });
    
});