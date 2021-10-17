let arrayNumbers = [1,6,23,8,4,98,3,7,3,98,4,98];

function main(){
    addAndSubstractWithForEach(arrayNumbers);
    averageWithFilterAndReduce(arrayNumbers);
}

function addAndSubstractWithForEach(array){
    let res = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element%2===0) {
            res += element;
        }
        else{
            res -= element;
        }
        
    }
    console.log('Result by foreach: ' + res);
}


function averageWithFilterAndReduce(array){
    let evenNumbers = array.filter(
        element =>{
            if(element%2===0) 
                return element;
        });
    let oddNumbers = array.filter(
        element =>{
            if(element%2!==0) 
                return element;
        });
            
    let res = evenNumbers.reduce((prev,curr)=> {return prev+curr},0) - oddNumbers.reduce((prev,curr)=> {return prev+curr},0);
    console.log('Resoult by filter and reduce: ' + res);
}

main();