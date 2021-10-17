let arrayNumbers = [1,6,23,8,4,98,3,7,3,98,4,98];

function main(){
    averageWithForEach(arrayNumbers);
    averageWithFilterAndReduce(arrayNumbers);
}

function averageWithForEach(array){
    let sum = 0;
    let numberOfEvenValues = 0;
     array.forEach(element => {
        if(element%2===0) {
            sum += element;
            numberOfEvenValues++;
        }
     });
    console.log('Average from even numbers by foreach: ' + sum/numberOfEvenValues);
}

function averageWithFilterAndReduce(array){
    let evenNumbers = array.filter(
        element =>{
            if(element%2===0) 
                return element;
        });
    let average = evenNumbers.reduce((prev,curr)=> {return prev+curr},0) / evenNumbers.length;
    console.log('Average from even numbers by filter and reduce: ' + average);
}

main();