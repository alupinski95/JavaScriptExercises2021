"use strict";
export default class NextGeneration {
  constructor(oldGen) {
    this.oldGen = oldGen;
    this.squareSize = oldGen.length;
    this.nextGeneration = Array.from(
      Array(this.squareSize),
      () => new Array(this.squareSize)
    );
  }
  calculateNextGeneration() {
    for (let i = 1; i < this.squareSize - 2; i++) {
      for (let j = 1; j < this.squareSize - 2; j++) {
          let chcecksum= this.calculateSquareCheckSum(i,j);
          if(this.oldGen[i][j]==0 && chcecksum==3){
              this.nextGeneration[i][j]=1;
          }
          else if(this.oldGen[i][j]==1 &&(chcecksum==3 || chcecksum==2)){
            this.nextGeneration[i][j]=1;
          }
          else{
            this.nextGeneration[i][j]=0;
          }
      }
    }
    return this.nextGeneration;
  }
  calculateSquareCheckSum(x, y) {
    return this.oldGen[x - 1][y - 1] +
      this.oldGen[x - 1][y] +
      this.oldGen[x - 1][y + 1] +
      this.oldGen[x][y - 1] +
      this.oldGen[x][y + 1] +
      this.oldGen[x + 1][y - 1] +
      this.oldGen[x + 1][y] +
      this.oldGen[x + 1][y + 1];
  }

}
