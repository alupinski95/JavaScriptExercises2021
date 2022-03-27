// 4)	Write a code that multiplies two matrices together. Dimension validation required. 
'use strict';

class MultipliesMatrices {
    constructor(firstMatrix, secondMatrix) {
        this.firstMatrix = firstMatrix;
        this.secondMatrix = secondMatrix;
        this.multipliedMatrice = [];
    }

    isMatricesValid() {
        return this.secondMatrix[0].length === this.firstMatrix.length;
    }

    multiplyMatrices() {
        if (this.isMatricesValid()) {
            return 'Can\'t multipy Matrices';
        }
        this.multipliedMatrice = Array.from(Array(this.firstMatrix.length), () => new Array(this.firstMatrix.length));
        for (let x = 0; x < this.firstMatrix.length; x++) {
            for (let y = 0; y < this.secondMatrix[0].length; y++) {
                for (let z = 0; z < this.firstMatrix[0].length; z++) {
                    if (this.multipliedMatrice[x] == undefined || this.multipliedMatrice[x][y] == undefined) {
                        this.multipliedMatrice[x][y] = this.firstMatrix[x][z] * this.secondMatrix[z][y];
                    } else {
                        this.multipliedMatrice[x][y] = this.multipliedMatrice[x][y] + this.firstMatrix[x][z] * this.secondMatrix[z][y];
                    }
                }
            }

        }
    }


}
let a = [
    [1, 2, 3, 1],
    [4, 5, 6, 1],
    [7, 8, 9, 1],
    [1, 1, 1, 1],
    [5, 7, 2, 6]
];

let b = [
    [1, 4, 7, 3, 4, 6],
    [2, 5, 8, 7, 3, 2],
    [3, 6, 9, 6, 7, 8],
    [1, 1, 1, 2, 3, 6]
];


function main() {
    let multipliesMatricesClass = new MultipliesMatrices(a, b);
    multipliesMatricesClass.multiplyMatrices();
    console.log(multipliesMatricesClass.multipliedMatrice);
}

main();