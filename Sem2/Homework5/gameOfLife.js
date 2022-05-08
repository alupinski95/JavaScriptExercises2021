"use strict";

const gameOfLifeSingleton = (function () {
  let gameInstance;

  class GameOfLife {
    constructor(boardSize) {
      this.squareSize = boardSize + 2;
      this.cellGeneration = Array.from(
        Array(this.squareSize),
        () => new Array(this.squareSize)
      );
      this.fillBoardRandom();
    }
    
    fillBoardRandom() {
      for (let i = 1; i <= this.squareSize - 2; i++) {
        for (let j = 1; j <= this.squareSize - 2; j++) {
            this.cellGeneration[i][j] = Math.floor(Math.random() * 2);
        }
      }
      
      this.fillEdgesForInfinityWrap();
    }

    fillEdgesForInfinityWrap(){
      this.cellGeneration[0] = this.getRow(this.squareSize-2);
      this.cellGeneration[this.squareSize-1] = this.getRow(1);
      this.copyColumn(this.squareSize-2,0);
      this.copyColumn(1,this.squareSize-1);
      this.cornersFill();
    }
    cornersFill(){
      this.cellGeneration[this.squareSize-1][this.squareSize-1] = this.cellGeneration[1][1];
      this.cellGeneration[this.squareSize-1][0] = this.cellGeneration[1][this.squareSize-2];
      this.cellGeneration[0][this.squareSize-1] = this.cellGeneration[this.squareSize-2][1];
      this.cellGeneration[0][0] = this.cellGeneration[this.squareSize-2][this.squareSize-2];
    }
    copyColumn(colNumber,colNumberToPlace){
      for(let i=0;i<this.squareSize-1;i++){
        this.cellGeneration[i][colNumberToPlace] = this.cellGeneration[i][colNumber];
      }
    }
    getRow(rowNumber){
      return this.cellGeneration[rowNumber];
    }
    setNewGeneration(newGen){
      this.cellGeneration = newGen;
      this.fillEdgesForInfinityWrap();
    }
  }
  
  function setActualGeneration(gen){
    return gameInstance.setNewGeneration(gen);
  }
  function getGameOfLife(boardSize) {
    if (!gameInstance) {
      gameInstance = new GameOfLife(boardSize);
    }
    return gameInstance;
  }

  return {
    getGameOfLife,setActualGeneration
  };
})();
export { gameOfLifeSingleton };