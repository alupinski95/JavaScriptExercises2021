
"use strict";
import { ballSingleton } from './Ball.js';
import { moveBoardSingleton } from './MoveBoard.js';


const gameSingleton = (function () {
    let gameInstance;

    class Game {

        constructor(board) {
            this.board = board;
            this.moveBoard = moveBoardSingleton.getMoveBoard(board);
            this.ball = ballSingleton.getBall(this.moveBoard.ball);
        }
        setStateGame(state) {
            this.state = state;
        }

        nextMoveGenerate() {
            ballSingleton.moveBall();
            if (this.moveBoard.moveBoard[this.ball.posX][this.ball.posY] !== null
                && this.moveBoard.moveBoard[this.ball.posX][this.ball.posY][this.ball.vector.key]
            ) {
                let vector = this.moveBoard.moveBoard[this.ball.posX][this.ball.posY][this.ball.vector.key];
                if (this.board[this.ball.posX][this.ball.posY] === "Y") {
                    this.moveBoard.moveBoard[this.ball.posX][this.ball.posY] = null;
                }
                ballSingleton.setVector(vector);
            }

        }
        checkIsEnd() {
            return this.ball.posX === 1 && this.ball.posY === 1;
        }
        getBallPosition() {
            return {
                x: this.ball.posX,
                y: this.ball.posY
            };
        }
    }

    function checkIsEnd() {
        return gameInstance.checkIsEnd();
    }

    function nextMoveGenerate() {
        gameInstance.nextMoveGenerate();
    }

    function getGame(board) {
        if (!gameInstance) {
            gameInstance = new Game(board);
        }
        return gameInstance;
    }

    function getBallPosition() {
        return gameInstance.getBallPosition();
    }

    return {
        getGame: getGame,
        nextMoveGenerate: nextMoveGenerate,
        checkIsEnd: checkIsEnd,
        getBallPosition: getBallPosition
    }
})();

export { gameSingleton };


