let numberArray = [1,6,23,8,4,8,3,7];

function main() {
    console.log("Random value from Array: "  + getRandomFromArray(numberArray));
    
}


function getRandomFromArray(array){
    let randomValue =Math.floor( Math.random() * (array.length -1))
    return array[randomValue];
}



main();