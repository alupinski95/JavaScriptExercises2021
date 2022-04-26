const ballSingleton = (function () {
    let ballInstance;

    class Ball {
        constructor(vector) {
            this.posX = 1;
            this.posY = 1;
            this.vector = vector;
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

    function getBall(vector) {
        if (!ballInstance) {
            ballInstance = new Ball(vector);
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