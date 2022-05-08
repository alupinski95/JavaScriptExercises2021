"use strict";
import { BoardViewDraw } from "./boardDraw.js";
import { gameOfLifeSingleton } from "./gameOfLife.js";
import NextGeneration from "./nextGeneration.js";
const boardSize =20;
const boardView = new BoardViewDraw(boardSize,boardSize, 40);

function main(){
    window.requestAnimationFrame(startGame);
}

function startGame(){
    setTimeout(() => {
        debugger
        let gameOfLife = gameOfLifeSingleton.getGameOfLife(boardSize);
        let actualGen = gameOfLife.cellGeneration;
        boardView.drawBoard(actualGen);
        let nextGenerationInstance = new NextGeneration(actualGen);
        gameOfLifeSingleton.setActualGeneration(nextGenerationInstance.calculateNextGeneration());
        window.requestAnimationFrame(startGame);
    }, 500);
}



main();