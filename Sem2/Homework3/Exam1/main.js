"use strict";
import { gameSingleton } from './Game.js';
import { boardSec, board } from './ExampleInput.js';
import { BoardView } from './Draw.js';


const boardView = new BoardView(boardSec, 40);
const gameInstance = gameSingleton.getGame(boardSec);

function main() {
    setTimeout(() => {
        boardView.removeOldBall(gameSingleton.getBallPosition());
        gameSingleton.nextMoveGenerate();
        boardView.drawBall(gameSingleton.getBallPosition());
        if (gameSingleton.checkIsEnd()) {
            window.cancelAnimationFrame(main);
        } else {
            window.requestAnimationFrame(main);

        }

    }, 500)

}
main();
// window.requestAnimationFrame(main);
