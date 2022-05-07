let arrayNumbers = [1,6,23,8,4,98,3,7,3,98,4,98];

function main(){
    averageWithForEach(arrayNumbers);
}

function averageWithForEach(array){
    let sum = 0;
    let numberOfEvenValues = 0;
    for (let i = 1; i < array.length; i++) {
        const element = array[i];
        if(i%2===0) {
            sum += element;
            numberOfEvenValues++;
        }
        
    }
    console.log('Average from even numbers by foreach: ' + sum/numberOfEvenValues);
}

main();