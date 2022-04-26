"use strict";
import { gameSingleton } from './Game.js';
import { board } from './ExampleInput.js';
import { BoardView } from './Draw.js';




function main() {
    let boardView = new BoardView(board);
    let gameInstance = gameSingleton.getGame(board);
    debugger
    // do {
    boardView.removeOldBall(gameSingleton.getBallPosition());

    setTimeout(() => {
        gameSingleton.nextMoveGenerate();
        boardView.drawBall(gameSingleton.getBallPosition());
    }, 1000)
    window.requestAnimationFrame(main);

    if (gameSingleton.checkIsEnd()) {
        return;
    }
}
window.requestAnimationFrame(main);
