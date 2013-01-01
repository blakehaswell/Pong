describe('the paddle object', function () {
    
    describe('the init method', function () {
        
        var paddle;
        
        beforeEach(function () {
            
            // Create and initialise the paddle.
            var paddle = new Paddle({
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
            });
            paddle.init();
            
        });
        
        afterEach(function () {
            
            // Remove any paddle elements created.
            $('.paddle').remove();
            
        });
        
        it('creates a paddle element', function () {
            
            // Verify the paddle element was created.
            expect($('.paddle').length).toEqual(1);
            
        });
        
        describe('the element created', function () {
            
            var $paddle;
            
            beforeEach(function () {
                $paddle = $('.paddle');
            });
            
            it('has a the ID passed in', function () {
                expect($paddle.attr('id')).toEqual('paddle_playerOne');
            });
            
            it('is 16px wide', function () {
                expect($paddle.width()).toEqual(16);
            });
            
            it('has the height passed in', function () {
                expect($paddle.height()).toEqual(128);
            });
            
            it('has the position passed in', function () {
                
                // Calculate the expected top offset.
                var paddleHeight = 128;
                var expectedTopOffset = 240 - (paddleHeight / 2);
                
                // Store the position of the paddle.
                var position = $paddle.position();
                
                // Verify that the position is correct.
                expect(position.top).toEqual(expectedTopOffset);
                expect(position.left).toEqual(80);
                
            });
            
            it('can be moved up and down using the controls passed in', function () {
                
                // Store the original paddle position.
                var origPaddlePosition =  $paddle.position().top;

                // Mock the keypress events.
                var upKeypress = $.Event('keypress');
                upKeypress.which = 97;
                var downKeypress = $.Event('keypress');
                downKeypress.which = 122;

                // Verify.
                $(document).trigger(upKeypress);
                expect($paddle.position().top).toEqual(origPaddlePosition - 20);
                $(document).trigger(downKeypress);
                expect($paddle.position().top).toEqual(origPaddlePosition);
                $(document).trigger(downKeypress);
                expect($paddle.position().top).toEqual(origPaddlePosition + 20);
                $(document).trigger(upKeypress);
                expect($paddle.position().top).toEqual(origPaddlePosition);
                
            });
            
        });
        
    });
    
    it('can determine if the ball is touching the paddle', function () {
        
    });
    
});