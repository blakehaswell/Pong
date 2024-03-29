Paddle = function (options) {
    
    // Set the name.
    this.name = options.name;
    
    // Set the controls.
    this.controls = options.controls;
    
    // Set the height.
    this.height = options.height;
    
    // Set the position.
    this.position = options.position;
    
};

Paddle.prototype.init = function () {
    
    // Create the paddle element.
    this.$el = $('<div class="paddle" id="paddle_' + this.name + '"></div>').css({
        width: 16,
        height: this.height,
        position: 'absolute',
        top: this.position.y - (this.height / 2),
        left: this.position.x - (16 / 2)
    }).appendTo('body');
    
    // Bind to keydown event.
    $(document).bind('keydown', $.proxy(function (event) {
        switch (event.which) {
            case this.controls.up:
                this.controlBeingPressed = 'up';
            break;
            case this.controls.down:
                this.controlBeingPressed = 'down';
            break;
        }
    }, this));
    
    // Bind to keyup event.
    $(document).bind('keyup', $.proxy(function (event) {
        if ((event.which === this.controls.up && this.controlBeingPressed === 'up')
                || (event.which === this.controls.down && this.controlBeingPressed === 'down')) {
            this.controlBeingPressed = false;
        }
    }, this));
    
};

Paddle.prototype.updatePosition = function () {
    
    switch (this.controlBeingPressed) {
        case 'up':
            this.position.y -= 16;
        break;
        case 'down':
            this.position.y += 16;
        break;
    }
    
    this.updateElementPosition();
    
};

Paddle.prototype.updateElementPosition = function () {
    this.$el.css({
        top: this.position.y - (this.height / 2)
    });
};

Paddle.prototype.isBallTouching = function (ball) {
    
    var paddleArea = {
        x1: this.position.x - (16 / 2),
        x2: this.position.x + (16 / 2),
        y1: this.position.y - (this.height / 2),
        y2: this.position.y + (this.height / 2)
    };
    
    var ballPosition = new BallPositionReporter(ball);
    
    if (!ballPosition.isAbove(paddleArea.y1) && !ballPosition.isBelow(paddleArea.y2)
            && !ballPosition.isLeftOf(paddleArea.x1) && !ballPosition.isRightOf(paddleArea.x2)) {
        return true;
    } else {
        return false;
    }
    
};