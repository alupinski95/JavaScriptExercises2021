import { moveDirection } from './MoveDirectionDictionary.js';

const moveBoardSingleton = (function () {
    let moveBoard;

    const posibleBounce = {
        corners: {
            upLeft: { "upLeft": moveDirection.rightBottom },
            leftBottom: { "leftBottom": moveDirection.upRight },
            upRight: { "upRight": moveDirection.leftBottom },
            rightBottom: { "rightBottom": moveDirection.upLeft }
        },
        xBorder: {
            left: {
                "upLeft": moveDirection.upRight,
                "leftBottom": moveDirection.rightBottom,
            },
            right: {
                "upRight": moveDirection.upLeft,
                "rightBottom": moveDirection.leftBottom,
            }
        },
        yBorder: {
            top: {
                "upLeft": moveDirection.leftBottom,
                "upRight": moveDirection.rightBottom,
            },
            bottom: {
                "rightBottom": moveDirection.upRight,
                "leftBottom": moveDirection.upLeft,
            }
        }
    };

    let vectorByChcecksum = {
        0: null,
        210: posibleBounce.corners.upLeft,
        77: posibleBounce.corners.upLeft,
        9: posibleBounce.corners.upLeft,
        177: posibleBounce.corners.upLeft,
        110: posibleBounce.corners.upLeft,

        299: posibleBounce.corners.upRight,
        137: posibleBounce.corners.upRight,
        33: posibleBounce.corners.upRight,
        146: posibleBounce.corners.upRight,
        290: posibleBounce.corners.upRight,

        438: posibleBounce.corners.leftBottom,
        276: posibleBounce.corners.leftBottom,
        100: posibleBounce.corners.leftBottom,
        285: posibleBounce.corners.leftBottom,
        429: posibleBounce.corners.leftBottom,

        498: posibleBounce.corners.rightBottom,
        365: posibleBounce.corners.rightBottom,
        153: posibleBounce.corners.rightBottom,
        465: posibleBounce.corners.rightBottom,
        398: posibleBounce.corners.rightBottom,

        157: posibleBounce.xBorder.left,
        57: posibleBounce.xBorder.left,
        148: posibleBounce.xBorder.left,

        270: posibleBounce.xBorder.right,
        117: posibleBounce.xBorder.right,
        237: posibleBounce.xBorder.right,

        62: posibleBounce.yBorder.top,
        29: posibleBounce.yBorder.top,
        53: posibleBounce.yBorder.top,

        281: posibleBounce.yBorder.bottom,
        228: posibleBounce.yBorder.bottom,
        381: posibleBounce.yBorder.bottom,

        128: posibleBounce.yBorder.bottom,
        20: posibleBounce.yBorder.top,
        84: posibleBounce.xBorder.right,
        48: posibleBounce.xBorder.left,
    }


    class MoveHelperTable {
        constructor(board) {
            this.board = board;
            this.moveBoard = Array.from(Array(board.length), () => new Array(board[0].length));
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
                                    vector: this.moveBoard[i][j][Object.keys(this.moveBoard[i][j])[0]]
                                }
                            }
                            break;
                    }
                }

            }
        }
        calculateSquareCheckSum(x, y) {
            let squareValue = this.getValueOfFieldByKey(this.board[x - 1][y - 1]) * 9 +
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
            return (key === 'X') ? 1 : 0;
        }

        getRandomVector() {
            return {
                upLeft: this.randomProperty(moveDirection, "upLeft"),
                leftBottom: this.randomProperty(moveDirection, "leftBottom"),
                upRight: this.randomProperty(moveDirection, "upRight"),
                rightBottom: this.randomProperty(moveDirection, "rightBottom")
            }
        }


        randomProperty(obj, oldVector) {
            var deepCopy = JSON.parse(JSON.stringify(obj));
            delete deepCopy[oldVector];
            var keys = Object.keys(deepCopy);
            return deepCopy[keys[keys.length * Math.random() << 0]];
        };
    }

    function getMoveBoard(board) {
        if (!moveBoard) {
            moveBoard = new MoveHelperTable(board);
        }
        return moveBoard;
    }

    return {
        getMoveBoard: getMoveBoard
    }
})();
export { moveBoardSingleton }