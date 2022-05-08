"use strict";
export class BoardViewDraw {
  constructor(row, squareSize) {
    this.boardHtml = document.getElementById("game-board");
    this.boardHtml.style.setProperty(
      "grid-template-rows",
      `repeat(${row}, ${squareSize}px)`
    );
    this.boardHtml.style.setProperty(
      "grid-template-columns",
      `repeat(${row}, ${squareSize}px)`
    );
  }


  drawCell(wallPos, isActive) {
    const cell = document.createElement("div");
    cell.style.gridRowStart = wallPos.x;
    cell.style.gridColumnStart = wallPos.y;
    cell.classList.add(isActive == 1 ? "active-cell" : "dead-cell");
    this.boardHtml.appendChild(cell);
  }

  drawBoard(boardArray) {
    this.boardHtml.innerHTML = "";
    for (let i = 1; i < boardArray.length - 2; i++) {
      for (let j = 1; j < boardArray[i].length - 2; j++) {
        this.drawCell({ x: i, y: j }, boardArray[i][j]);
      }
    }
  }
}
