let numberArray = [1,6,23,8,4,8,3,7];

function main() {
    let atempts=7;
    console.log("Random min value from Array with "+ atempts +" atempts: "  + getRandomWithAtempts(numberArray,atempts));
    
}


function getRandomWithAtempts(array,numberOfAtempts){
    let chosenNumbers= [];
    for (let index = 0; index < numberOfAtempts; index++) {
        let randomValue =Math.floor( Math.random() * (array.length -1))
        chosenNumbers.push( array[randomValue]);
    }
    return Math.min(...chosenNumbers);
}



main();