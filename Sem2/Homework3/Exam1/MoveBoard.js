import { moveDirection } from './MoveDirectionDictionary.js';

const moveBoardSingleton = (function () {
    let moveBoard;

    const posibleBounce = {
        corners: {
            "upLeft": moveDirection.bottomRight,
            "leftbottom": moveDirection.upRight,
            "upRight": moveDirection.bottomLeft,
            "rightbottom": moveDirection.upLeft
        },
        xBorder: {
            left: {
                "upLeft": moveDirection.upRight,
                "bottomLeft": moveDirection.bottomRight,
            },
            right: {
                "upRight": moveDirection.upLeft,
                "bottomRight": moveDirection.bottomLeft,
            }
        },
        yBorder: {
            top: {
                "upLeft": moveDirection.bottomLeft,
                "upRight": moveDirection.bottomRight,
            },
            bottom: {
                "bottomRight": moveDirection.upRight,
                "bottomLeft": moveDirection.upLeft,
            }
        }
    };

    let vectorByChcecksum = {
        0: null,
        210: posibleBounce.corners['upLeft'],
        77: posibleBounce.corners['upLeft'],
        9: posibleBounce.corners['upLeft'],

        299: posibleBounce.corners['upRight'],
        137: posibleBounce.corners['upRight'],
        33: posibleBounce.corners['upRight'],

        438: posibleBounce.corners['leftbottom'],
        276: posibleBounce.corners['leftbottom'],
        100: posibleBounce.corners['leftbottom'],

        498: posibleBounce.corners['rightbottom'],
        365: posibleBounce.corners['rightbottom'],
        153: posibleBounce.corners['rightbottom'],

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
    }


    class MoveHelperTable {
        constructor(board) {
            this.board = board;
            this.moveBoard = Array.from(Array(board.length), () => new Array(board[0].length));
            this.generateMoveHelper();
        }
        generateMoveHelper() {
            for (let i = 1; i < this.board.length - 1; i++) {
                const element = this.board[i];
                for (let j = 1; j < element.length - 1; j++) {
                    switch (this.board[i][j]) {
                        case "Y":
                            // take random place from array for go to there
                            break;
                        default:
                            let checkSum = this.calculateSquareCheckSum(i, j);
                            this.moveBoard[i][j] = vectorByChcecksum[checkSum];

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
            return (key === '0' || key === '1') ? 0 : 1;
        }
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