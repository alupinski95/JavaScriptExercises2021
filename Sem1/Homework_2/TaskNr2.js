let numberArray = [1,6,23,8,4,8,3,7];

function main() {
    console.log("Sum of first and last elements: " + sumLirstAndLast(numberArray));
    
}


function sumLirstAndLast(array){
    return array[0]+ array[array.length-1];
}


main();