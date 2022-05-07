import { moveDirection, vectorByChcecksum } from "./MoveDirectionDictionary.js";

const moveBoardSingleton = (function () {
  let moveBoard;

  class MoveHelperTable {
    constructor(board) {
      this.board = board;
      this.moveBoard = Array.from(
        Array(board.length),
        () => new Array(board[0].length)
      );
      this.ball = null;
      this.generateMoveHelper();
    }
    generateMoveHelper() {
      for (let i = 1; i < this.board.length - 1; i++) {
        const element = this.board[i];
        for (let j = 1; j < element.length - 1; j++) {
          switch (this.board[i][j]) {
            case "X":
              break;
            case "Y":
              this.moveBoard[i][j] = this.getRandomVector();
              break;
            default:
              let checkSum = this.calculateSquareCheckSum(i, j);
              this.moveBoard[i][j] = vectorByChcecksum[checkSum];

              if (this.board[i][j] === "1") {
                this.ball = {
                  x: i,
                  y: j,
                  vector:
                    this.moveBoard[i][j][Object.keys(this.moveBoard[i][j])[0]],
                };
              }
              break;
          }
        }
      }
    }
    calculateSquareCheckSum(x, y) {
      let squareValue =
        this.getValueOfFieldByKey(this.board[x - 1][y - 1]) * 9 +
        this.getValueOfFieldByKey(this.board[x - 1][y]) * 20 +
        this.getValueOfFieldByKey(this.board[x - 1][y + 1]) * 33 +
        this.getValueOfFieldByKey(this.board[x][y - 1]) * 48 +
        this.getValueOfFieldByKey(this.board[x][y + 1]) * 84 +
        this.getValueOfFieldByKey(this.board[x + 1][y - 1]) * 100 +
        this.getValueOfFieldByKey(this.board[x + 1][y]) * 128 +
        this.getValueOfFieldByKey(this.board[x + 1][y + 1]) * 153;
      return squareValue;
    }
    getValueOfFieldByKey(key) {
      return key === "X" ? 1 : 0;
    }

    getRandomVector() {
      return {
        upLeft: this.randomProperty(moveDirection, "upLeft"),
        leftBottom: this.randomProperty(moveDirection, "leftBottom"),
        upRight: this.randomProperty(moveDirection, "upRight"),
        rightBottom: this.randomProperty(moveDirection, "rightBottom"),
      };
    }

    randomProperty(obj, oldVector) {
      var deepCopy = JSON.parse(JSON.stringify(obj));
      delete deepCopy[oldVector];
      var keys = Object.keys(deepCopy);
      return deepCopy[keys[(keys.length * Math.random()) << 0]];
    }
  }

  function getMoveBoard(board) {
    if (!moveBoard) {
      moveBoard = new MoveHelperTable(board);
    }
    return moveBoard;
  }

  return {
    getMoveBoard: getMoveBoard,
  };
})();
export { moveBoardSingleton };
