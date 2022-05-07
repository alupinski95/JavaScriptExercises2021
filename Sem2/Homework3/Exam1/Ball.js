const ballSingleton = (function () {
    let ballInstance;

    class Ball {
        constructor(ballData) {
            this.posX = ballData.x;
            this.posY = ballData.y;
            this.vector = ballData.vector;
        }
        setVector(vector) {
            this.vector = vector;
        }

        moveBallByVector() {
            this.posX = this.posX + this.vector.vector[0];
            this.posY = this.posY + this.vector.vector[1];
        }
    }
    function moveBall() {
        ballInstance.moveBallByVector();
    }

    function setVector(vector) {
        ballInstance.setVector(vector);
    }

    function getBall(ballData) {
        if (!ballInstance) {
            ballInstance = new Ball(ballData);
        }
        return ballInstance;
    }

    return {
        getBall: getBall,
        moveBall: moveBall,
        setVector: setVector
    }
})();
export { ballSingleton };