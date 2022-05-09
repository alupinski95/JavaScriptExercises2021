"use strict";
import { gameSingleton } from './Game.js';
import { boardSec, board } from './ExampleInput.js';
import { BoardView } from './Draw.js';


const boardView = new BoardView(boardSec, 40);
function main() {
    const gameInstance = gameSingleton.getGame(boardSec);

    setTimeout(() => {
        boardView.removeOldBall(gameSingleton.getBallPosition());
        gameInstance.nextMoveGenerate();
        boardView.drawBall(gameSingleton.getBallPosition());
        if (gameInstance.checkIsEnd()) {
            window.cancelAnimationFrame(main);
        } else {
            window.requestAnimationFrame(main);

        }

    }, 500)

}
main();
