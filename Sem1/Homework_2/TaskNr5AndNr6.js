let numberArray = [1,6,23,8,4,8,3,7];

function main() {
    console.log("New Array: "  + sumNeighbours(numberArray));
    numberArray.splice(numberArray.length-1,1);
    console.log("New Array after remove last value: "  + sumNeighbours(numberArray));
    
}


function sumNeighbours(array){
    let resoult = [];

    for(let i = 0; i <= array.length-1; i+=2){

        let val = array[i];
        if(array[i+1]){
            val+=array[i+1]
        }
        resoult.push(val);
    }
    return resoult;
}



main();