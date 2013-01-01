describe('the paddle object', function () {
    
    var paddle;
    
    beforeEach(function () {
        
        // Create the paddle.
        paddle = new Paddle({
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
        
    });
    
    describe('the init method', function () {
        
        beforeEach(function () {
            
            // Initialise the paddle.
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
                expect($paddle.position().top).toEqual(origPaddlePosition - 16);
                $(document).trigger(downKeypress);
                expect($paddle.position().top).toEqual(origPaddlePosition);
                $(document).trigger(downKeypress);
                expect($paddle.position().top).toEqual(origPaddlePosition + 16);
                $(document).trigger(upKeypress);
                expect($paddle.position().top).toEqual(origPaddlePosition);
                
            });
            
        });
        
    });
    
    it('can determine if the ball is touching the paddle', function () {
        
        // Create a mock ball constructor.
        var MockBall = function (position) {
            this.size = 16;
            this.position = position;
        };
        
        // Create mock balls.
        var notTouchingBalls = [
            new MockBall({ x: 71, y: 312 }),
            new MockBall({ x: 105, y: 312 }),
            new MockBall({ x: 71, y: 328 }),
            new MockBall({ x: 105, y: 328 }),
            new MockBall({ x: 72, y: 329 }),
            new MockBall({ x: 104, y: 329 }),
            new MockBall({ x: 71, y: 168 }),
            new MockBall({ x: 72, y: 167 }),
            new MockBall({ x: 105, y: 168 }),
            new MockBall({ x: 104, y: 167 })
        ];
        
        var touchingBalls = [
            new MockBall({ x: 72, y: 312 }),
            new MockBall({ x: 104, y: 312 }),
            new MockBall({ x: 72, y: 184 }),
            new MockBall({ x: 104, y: 184 })
        ];
        
        var touchingAfterMoveBalls = [
            new MockBall({ x: 72, y: 313 }),
            new MockBall({ x: 104, y: 313 }),
            new MockBall({ x: 72, y: 328 }),
            new MockBall({ x: 104, y: 328 })
        ];
        
        var touchingBeforeMoveBalls = [
            new MockBall({ x: 72, y: 168 }),
            new MockBall({ x: 104, y: 168 }),
            new MockBall({ x: 72, y: 183 }),
            new MockBall({ x: 104, y: 183 })
        ];
        
        // Mock the keypress event.
        var downKeypress = $.Event('keypress');
        downKeypress.which = 122;
        
        // Initialise the paddle.
        paddle.init();
        
        // Verify that expected balls are not touching.
        $.each(notTouchingBalls.concat(touchingAfterMoveBalls), function (index, ball) {
            expect(paddle.isBallTouching(ball)).toBeFalsy();
        });
        
        // Verify that expected balls are touching.
        $.each(touchingBalls.concat(touchingBeforeMoveBalls), function (index, ball) {
            expect(paddle.isBallTouching(ball)).toBeTruthy();
        });
        
        // Move the paddle.
        $(document).trigger(downKeypress);
        
        // Verify that expected balls are not touching.
        $.each(notTouchingBalls.concat(touchingBeforeMoveBalls), function (index, ball) {
            expect(paddle.isBallTouching(ball)).toBeFalsy();
        });
        
        // Verify that expected balls are touching.
        $.each(touchingBalls.concat(touchingAfterMoveBalls), function (index, ball) {
            expect(paddle.isBallTouching(ball)).toBeTruthy();
        });
        
        // Remove any paddle elements created.
        $('.paddle').remove();
        
    });
    
});