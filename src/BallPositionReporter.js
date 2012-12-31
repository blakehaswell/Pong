var BallPositionReporter = function (ball) {
    this.ball = ball;
    this.ballOffset = this.ball.size / 2;
}

BallPositionReporter.prototype.isAbove = function (yPos) {
    return this.ball.position.y < yPos - this.ballOffset;
};

BallPositionReporter.prototype.isBelow = function (yPos) {
    return this.ball.position.y > yPos + this.ballOffset;
};

BallPositionReporter.prototype.isLeftOf = function (xPos) {
    return this.ball.position.x < xPos - this.ballOffset;
};

BallPositionReporter.prototype.isRightOf = function (xPos) {
    return this.ball.position.x > xPos + this.ballOffset;
};