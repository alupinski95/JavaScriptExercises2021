let numberArray = [1,6,23,8,4,8,3,7];

function main() {
    console.log("Reverse Array "  + reverseArray(numberArray));
    
}


function reverseArray(array){
    let resoult = [];
    for (let i = array.length-1; i >= 0; i--) {
        resoult.push(array[i]);
    }
    return resoult;
}
main();