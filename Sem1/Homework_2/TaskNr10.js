let numberArray = [1,6,23,8,4,8,3,7];
//Create a function that takes given array. Then takes a random element,
// removes it from the array and pushes it to result arrays. 
//This takes place as long as there are elements in source array. 

function main() {
    console.log("Array created from random picked values from Old Array: " +createArrayWithRandomPick(numberArray));  
}


function getRandomIndex(array){
    return Math.floor( Math.random() * (array.length -1));
}

function createArrayWithRandomPick(array){
    let newArray=[];
    for(let i=0;i<=array.length-1;i++){
        let index = getRandomIndex(array);
        newArray.push(array[index]);
        array.splice(index,1);
    }
    return newArray;
}

main();