Paddle = function (options) {
    
    // Set the controls
    this.controls = options.controls;
    
}

Paddle.prototype.init = function () {
    
    // Create the paddle element.
    this.$el = $('<div></div>').css({
        position: 'absolute',
        top: 0,
        left: 0
    }).appendTo('body');
    
    // Bind to keypress events.
    $(document).bind('keypress', $.proxy(function (event) {
        
        switch (event.which) {
            case this.controls.up:
                this.$el.css({
                    top: this.$el.position().top - 20
                });
            break;
            case this.controls.down:
                this.$el.css({
                    top: this.$el.position().top + 20
                });
            break;
        }
        
    }, this));
    
}