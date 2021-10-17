let valueArray = [1,6,23,8,4,98,3,7,3,98,4,98];


function main(){
    getIndexsOfMaxValueForEach(valueArray);
}

function getIndexsOfMaxValueForEach(array){
    let maxValue = 0;
    let indexs = [];
    array.forEach(element => {
        if(element > maxValue)
            maxValue = element;
    });
    for (let index = 0; index < array.length; index++) {
        if(maxValue === array[index]){
            indexs.push(index);
        }
    }
    console.log('Indexs of max Value in array with foreach: ' + indexs);
}

main();