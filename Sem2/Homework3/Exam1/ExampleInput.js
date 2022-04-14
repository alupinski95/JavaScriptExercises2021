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

  function generateMoveHelper(){
    for (let i = 1; i < board.length-1; i++) {
      const element = array[i];
      for (let j = 1; j < element.length-1; j++) {
        const element = array[j];
        switch (array[j]) {
          case "X":
            // make circle  of vectors
            break;
          case "Y":
            // take random place from array for go to there
            break;
          default://for 0 and 1
            // get vector by control sum
            
            //1|2|3     "X"&&"1" = 1
            //4|5|6     "0"=0
            //7|8|9
            break;
        }
      }
      
    }
  }

// class Field{
//   constructor(posX,posY){
//     this.x=posX;
//     this.y =posY;
//   }
//   findPosibleMove(){
    
//   }
// }

// class MoveDirection{
//     constructor(){

//     }
// }

// class MoveFactory{
//   createMove(data){

//   }
// }

const singletonBall = (function(){
  let ballInstance;

  const moveDirection ={
    upLeft: {key: "upLeft",vector:[-1,-1]},
    upRight: {key: "upRight",vector:[-1,1]},
    bottomLeft: {key: "bottomLeft",vector:[1,-1]},
    bottomRight: {key: "bottomRight",vector:[1,1]},
  };

  const posibleBounce={
    corners:{
        "upLeft":moveDirection.bottomRight,
        "leftbottom":moveDirection.upRight,
        "upRight":moveDirection.bottomLeft,
        "rightbottom":moveDirection.upLeft
    },
    xBorder:{
      start:{
        "upLeft":moveDirection.upRight,
        "bottomLeft":moveDirection.bottomRight,
      },
      end:{
        "upRight":moveDirection.upLeft,
        "bottomRight":moveDirection.bottomLeft,
      }
    },
    yBorder:{
      top:{
        "upLeft":moveDirection.bottomLeft,
        "upRight":moveDirection.bottomRight,
      },
      bottom:{
        "bottomRight":moveDirection.upRight,
        "bottomLeft":moveDirection.upLeft,
      }
    }
  };//druga tablica z ustawionymi miejscami odbić 

  class Ball{
    constructor(){
        this.posX=0;
        this.posY=0;
      }
      setVector(vector){
        this.vector = vector;
      }
  }


  function getBall(){
    if(!ballInstance){
      ballInstance = new Ball();
    }
    return ballInstance;
  }
  return {
    getBall:getBall,
    moveDirection:moveDirection
  }
})();



const singletonGame = (function(){
  class Game{
    constructor(board){
      this.board = board;
      // this.startPosX
      // this.startPosY
      this.ball = findBallPosition();
    }
    findBallPosition(){

    }
  }
})();

  