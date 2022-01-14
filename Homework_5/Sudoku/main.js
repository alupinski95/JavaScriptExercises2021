
// let sudokuTemp = [
//     [7, 0, 4, 8, 0, 0, 3, 0, 1],
//     [8, 2, 0, 5, 0, 0, 0, 4, 0],
//     [0, 0, 9, 4, 3, 0, 5, 0, 0],
//     [3, 1, 0, 0, 0, 0, 8, 0, 7],
//     [0, 8, 0, 0, 0, 0, 0, 1, 0],
//     [9, 0, 7, 0, 0, 0, 0, 3, 2],
//     [0, 0, 6, 0, 1, 5, 4, 0, 0],
//     [0, 7, 0, 0, 0, 9, 0, 6, 5],
//     [5, 0, 8, 0, 0, 2, 1, 0, 3]
// ]
let sudokuTemp = [
    [2, 6, 0, 0, 0, 0, 0, 0, 0],
    [0, 8, 0, 0, 0, 9, 6, 0, 0],
    [0, 0, 0, 0, 5, 0, 0, 0, 0],
    [0, 9, 4, 3, 0, 0, 5, 0, 0],
    [0, 0, 2, 0, 7, 0, 0, 0, 0],
    [0, 5, 0, 0, 0, 0, 8, 0, 4],
    [0, 3, 5, 8, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 3, 0, 1],
    [7, 0, 0, 0, 6, 0, 0, 0, 0]
]
const allPossibilities = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let possibleNumbersToPutInCell = Array.from(Array(9), () => new Array(9));
let possibleNumbersToPutInSquare = [];
let numbersToFind = 0;

function main() {
    resolveSudoku(sudokuTemp, true);

    while (numbersToFind) {
        resolveSudoku(sudokuTemp, false);
        console.log(numbersToFind);
        console.log("---------------------------");
        console.log(sudokuTemp[0]);
        console.log(sudokuTemp[1]);
        console.log(sudokuTemp[2]);
        console.log(sudokuTemp[3]);
        console.log(sudokuTemp[4]);
        console.log(sudokuTemp[5]);
        console.log(sudokuTemp[6]);
        console.log(sudokuTemp[7]);
        console.log(sudokuTemp[8]);
    }
    console.log(sudokuTemp[0]);
    console.log(sudokuTemp[1]);
    console.log(sudokuTemp[2]);
    console.log(sudokuTemp[3]);
    console.log(sudokuTemp[4]);
    console.log(sudokuTemp[5]);
    console.log(sudokuTemp[6]);
    console.log(sudokuTemp[7]);
    console.log(sudokuTemp[8]);
}

function resolveSudoku(array, isFirstLoop) {
    for (let x = 0; x < array.length; x++) {
        let actualLine = sudokuTemp[x];
        let actualSquare = [];
        for (let y = 0; y < array.length; y++) {
            if (array[x][y] > 0) {
                continue;
            }
            if (isFirstLoop) numbersToFind++;

            if (isNewSquareNeed(x, y) || !isFirstLoop) {
                actualSquare = getActualSquare(array, x, y);
            }



            let actualColumn = getActualColumn(array, y);

            let diff = [...new Set([...actualLine, ...actualSquare, ...actualColumn])];
            diff = allPossibilities.filter(x => !diff.includes(x));
            possibleNumbersToPutInCell[x][y] = diff;


            if (possibleNumbersToPutInCell[x][y] && possibleNumbersToPutInCell[x][y].length == 1) {
                let value = possibleNumbersToPutInCell[x][y][0];
                sudokuTemp[x][y] = value;
                updatePossibleRows(x, y, value);
            }
            else if (!isFirstLoop) {
                let one = findOnePosible(possibleNumbersToPutInCell[x]);
                if (one != -1)
                    console.log(one + "x: " + x + "y: " + y);
                let oneCol = findOnePosible(getActualColumn(possibleNumbersToPutInCell, y));
                if (oneCol != -1)
                    console.log(oneCol + "x: " + x + "y: " + y);
            }
        }

    }
}

function getActualColumn(array, y) {
    return [
        array[0][y],
        array[1][y],
        array[2][y],
        array[3][y],
        array[4][y],
        array[5][y],
        array[6][y],
        array[7][y],
        array[8][y]
    ];
}

function isNewSquareNeed(x, y) {
    return (x == 0 || x == 3 || x == 6) && (y == 0 || y == 3 || y == 6);
}

function getActualSquare(array, x, y) {
    x = Math.floor(x / 3) * 3;
    y = Math.floor(y / 3) * 3;
    return [
        array[x][y],
        array[x][y + 1],
        array[x][y + 2],
        array[x + 1][y],
        array[x + 1][y + 1],
        array[x + 1][y + 2],
        array[x + 2][y],
        array[x + 2][y + 1],
        array[x + 2][y + 2]
    ];
}

function updatePossibleRows(x, y, value) {
    numbersToFind--;
    removeFromPosibleSet(x, y, value);

}

function removeFromPosibleSet(x, y, value) {
    for (let i = 0; i < 9; i++) {
        if (possibleNumbersToPutInCell[i][y]) {
            let index = possibleNumbersToPutInCell[i][y].indexOf(value);
            if (index != -1)
                possibleNumbersToPutInCell[i][y].splice(index, 1);
        }
        if (possibleNumbersToPutInCell[x][i]) {//col
            let index = possibleNumbersToPutInCell[x][i].indexOf(value);
            if (index != -1)
                possibleNumbersToPutInCell[x][i].splice(index, 1);
        }
    }
    let squareX = Math.floor(x / 3) * 3;
    let squareY = Math.floor(y / 3) * 3;
    for (let xq = squareX; xq < squareX + 3; xq++) {
        for (let yq = squareY; yq < squareY + 3; yq++) {
            if (possibleNumbersToPutInCell[xq][yq]) {
                let index = possibleNumbersToPutInCell[xq][yq].indexOf(value);
                if (index != -1)
                    possibleNumbersToPutInCell[xq][yq].splice(index, 1);
            }
        }
    }
}

function findOnePosible(array) {
    let helpArr = [];
    let setFromArray = helpArr.concat(...array);
    setFromArray.forEach(e => {
        helpArr[e] ? helpArr[e] += 1 : helpArr[e] = 1;
    });
    return helpArr.findIndex(el => el == 1);
}

main();

