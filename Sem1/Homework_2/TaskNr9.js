let numberArray = [1,6,23,8,4,8,3,7];

function main() {
    let atempts=7;
    console.log("Random min value from Array with "+ atempts 
    +" atempts: "  + createArrayWithRandomPick(numberArray));
    
}


function getRandomIndex(array){
    let randomValue =Math.floor( Math.random() * (array.length -1))
    return array[randomValue];
}

function createArrayWithRandomPick(array){
    let len = array.length-1;
    let newArray=[];
    for(let i=0;i<len;i++){
        let index = getRandomIndex(array);
        newArray.push(array[index]);
        array.splice(index,1);
    }
}

main();