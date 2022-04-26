
"use strict";
import { ballSingleton } from './Ball.js';
import { moveBoardSingleton } from './MoveBoard.js';


const gameSingleton = (function () {
    let gameInstance;
    const gameState = {
        Started: 1,
        Paused: 2,
        Ended: 3,
        NotStarted: 4
    }

    class Game {

        constructor(board) {
            this.board = board;
            this.state = gameState.NotStarted;
            this.moveBoard = moveBoardSingleton.getMoveBoard(board);
            this.ball = ballSingleton.getBall(this.moveBoard.moveBoard[1][1]);
        }

        setStateGame(state) {
            this.state = state;
        }

        nextMoveGenerate() {
            //console.log('X: ' + this.ball.posX + '    Y: ' + this.ball.posY)

            ballSingleton.moveBall();
            if (this.moveBoard.moveBoard[this.ball.posX][this.ball.posY] !== null) {
                let vector =
                    this.moveBoard.moveBoard[this.ball.posX][this.ball.posY].key ?
                        this.moveBoard.moveBoard[this.ball.posX][this.ball.posY] :
                        this.moveBoard.moveBoard[this.ball.posX][this.ball.posY][this.ball.vector.key];
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


