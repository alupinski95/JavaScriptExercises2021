"use strict";
export class BoardView {



    constructor(boardArray) {
        this.boardHtml = document.getElementById('game-board');
        this.drawBoard(boardArray);
    }

    removeOldBall() {
        debugger
        let ball = document.querySelector('.ball');
        this.boardHtml.removeChild(ball)
        //ball.classList.remove("ball");
        // debugger
        // this.boardHtml.removeChild(ball)
    }

    drawBall(ballPos) {
        const ball = document.createElement('div');
        ball.style.gridRowStart = ballPos.x + 1;
        ball.style.gridColumnStart = ballPos.y + 1;
        ball.classList.add('ball');
        this.boardHtml.appendChild(ball);
    }

    drawWall(wallPos) {
        const wall = document.createElement('div');
        wall.style.gridRowStart = wallPos.x + 1;
        wall.style.gridColumnStart = wallPos.y + 1;
        wall.classList.add('wall');
        this.boardHtml.appendChild(wall);
    }

    drawBoard(boardArray) {
        for (let i = 0; i < boardArray.length; i++) {
            for (let j = 0; j < boardArray[i].length; j++) {
                if (boardArray[i][j] === 'X') {
                    this.drawWall({ x: i, y: j });
                }
                if (boardArray[i][j] === '1') {
                    this.drawBall({ x: i, y: j });
                }
            }
        }
    }
}





