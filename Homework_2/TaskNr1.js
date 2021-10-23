let numberArray = [1,6,23,8,4,8,3,7];

function main() {
    console.log("Sum of all elements: " + sumOfArray(numberArray));
    
}


function sumOfArray(array){
    let sum = 0;
    array.forEach(element => {
        sum+=element;
    });
    return sum;
}


main();