const arrayToRotate = [1,2,3,4,5,6];

function main(array, elementsToRotate){
    for (let index = 0; index < elementsToRotate; index++) {
        const element = array[0];
        array.splice(0,1);
        array.push(element);
    }
    console.log(array);
}

main(arrayToRotate,8);