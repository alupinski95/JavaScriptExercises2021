// 3)	[EXAM] Create bouncy simulator. Get board from ExampleInput.js. 
//     X – border, 0 – boards object can travel, 1 – bouncing object. 
//     The program is to show how the object would travel and bounce against the walls. 
//     The program is to end when object comes back to original position. wykrywanie który róg 

const board = [
    ["X", "X", "X", "X", "X", "X", "X"],
    ["X", "1", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "0", "X"],
    ["X", "X", "X", "X", "X", "X", "X"]
];

module.exports = {
    board: board
};

const moveDirection = {
    upLeft: { key: "upLeft", vector: [-1, -1] },
    upRight: { key: "upRight", vector: [-1, 1] },
    bottomLeft: { key: "bottomLeft", vector: [1, -1] },
    bottomRight: { key: "bottomRight", vector: [1, 1] },
};


const moveBoardHelper = (function (board) {
    let moveBoard = [];
    let vectorByChcecksum = {
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

    function generateMoveHelper() {
        for (let i = 1; i < board.length - 1; i++) {
            const element = array[i];
            for (let j = 1; j < element.length - 1; j++) {
                const element = array[j];
                switch (array[j]) {
                    case "Y":
                        // take random place from array for go to there
                        break;
                    default:
                        let checkSum = calculateSquareCheckSum(i, j);
                        moveBoard[i][j] = vectorByChcecksum[checkSum];

                        break;
                }
            }

        }
    }
    function calculateSquareCheckSum(x, y) {
        let squareValue = getValueOfFieldByKey(board[x - 1][y - 1]) * 9 +
            getValueOfFieldByKey(board[x][y - 1]) * 20 +
            getValueOfFieldByKey(board[x + 1][y - 1]) * 33 +
            getValueOfFieldByKey(board[x - 1][y]) * 48 +
            getValueOfFieldByKey(board[x + 1][y]) * 84 +
            getValueOfFieldByKey(board[x - 1][y + 1]) * 100 +
            getValueOfFieldByKey(board[x][y + 1]) * 128 +
            getValueOfFieldByKey(board[x + 1][y + 1]) * 153;
        return squareValue;
    }
    function getValueOfFieldByKey(key) {
        return (key === '0') ? 0 : 1;
    }
    function getMoveBoard() {
        if (!moveBoard) {
            moveBoard = new generateMoveHelper();
        }
        return ballInstance;
    }

    return {
        getMoveBoard: getMoveBoard
    }
})


const singletonBall = (function () {
    let ballInstance;

    class Ball {
        constructor() {
            this.posX = 0;
            this.posY = 0;
            this.allMoves = [];
            this.vector = null;
        }
        setVector(vector) {
            this.vector = vector;
        }
    }


    function getBall() {
        if (!ballInstance) {
            ballInstance = new Ball();
        }
        return ballInstance;
    }
    return {
        getBall: getBall
    }
})();



const singletonGame = (function () {
    class Game {
        constructor(board) {
            this.board = board;
            this.moveBoard = moveBoardHelper(board);
            this.ball = findBallPosition();
        }
        findBallPosition() {

        }
    }
})();

