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
    
    // Bind to keypress events.
    $(document).bind('keypress', $.proxy(function (event) {
        
        switch (event.which) {
            case this.controls.up:
                this.$el.css({
                    top: this.$el.position().top - 16
                });
            break;
            case this.controls.down:
                this.$el.css({
                    top: this.$el.position().top + 16
                });
            break;
        }
        
    }, this));
    
};