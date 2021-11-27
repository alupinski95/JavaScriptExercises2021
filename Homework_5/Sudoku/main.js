
let sudokuTemp = [
    [7, 0, 4, 8, 0, 0, 3, 0, 1],
    [8, 2, 0, 5, 0, 0, 0, 4, 0],
    [0, 0, 9, 4, 3, 0, 5, 0, 0],
    [3, 1, 0, 0, 0, 0, 8, 0, 7],
    [0, 8, 0, 0, 0, 0, 0, 1, 0],
    [9, 0, 7, 0, 0, 0, 0, 3, 2],
    [0, 0, 6, 0, 1, 5, 4, 0, 0],
    [0, 7, 0, 0, 0, 9, 0, 6, 5],
    [5, 0, 8, 0, 0, 2, 1, 0, 3]
]
const allPossibilities = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let possibleNumbersToPut = Array.from(Array(9), () => new Array(9));


function main() {
    resloweSudoku(sudokuTemp);
    console.log(possibleNumbersToPut);
}

function resloweSudoku(array) {
    for (let x = 0; x < array.length; x++) {
        let actualLine = sudokuTemp[x];
        let actualSquare = [];
        for (let y = 0; y < array.length; y++) {


            if (isNewSquareNeed(x, y))
                actualSquare = getActualSquare(array, x, y);

            if (array[x][y] > 0) continue;

            let actualColumn = getActualColumn(array, y);

            let diff = [...new Set([...actualLine, ...actualSquare, ...actualColumn])];
            diff = allPossibilities.filter(x => !diff.includes(x))

            if (diff.length == 1) {
                sudokuTemp[x][y] = diff[0];
                updatePossibleRows(possibleNumbersToPut, x, v, diff[0]);
            }
            else {
                possibleNumbersToPut[x][y] = diff;
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

function updatePossibleRows(possibleNumbersToPut, x, y, value) {
    let xhelper = x;
    for (; x;) {
        let index = possibleNumbersToPut[x][y].indexOf(value);
        if (possibleNumbersToPut[x][y] && index != -1)
            possibleNumbersToPut[x][y].splice(index, 1);
    }

}
main();