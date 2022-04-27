"use strict";
import { gameSingleton } from './Game.js';
import { board } from './ExampleInput.js';
import { BoardView } from './Draw.js';


const boardView = new BoardView(board);


function main() {
    let gameInstance = gameSingleton.getGame(board);

    setTimeout(() => {
        boardView.removeOldBall(gameSingleton.getBallPosition());
        gameSingleton.nextMoveGenerate();
        boardView.drawBall(gameSingleton.getBallPosition());
        if (gameSingleton.checkIsEnd()) {
            window.cancelAnimationFrame(main);
        } else {
            window.requestAnimationFrame(main);

        }

    }, 1000)

}
main();
// window.requestAnimationFrame(main);
