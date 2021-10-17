let valueArray = [1,6,23,8,4,98,3,7,3,98,4,98];



function main() {
    minAndMaxWithMath(valueArray);

    pickMinAndMaxForEach(valueArray);

    sortAndPick(valueArray);
}


function pickMinAndMaxForEach(array){
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    array.forEach(element => {
        if(min >= element)
            min = element;
        if(max <= element)
            max = element;
    });
    console.log("Min value: "+ min + " Max Value: " + max + " With loop.")    
}

function sortAndPick(array){
    let sortedArray = array.sort((a,b)=> {return a-b});
    // sort deafultowo sortuje wartoci jako string, by sortować po numerach należy podać funkcje która zwróci falsy value
    console.log("Min value: "+ sortedArray[0] + " Max Value: " + sortedArray[sortedArray.length-1] + " With sort.")    
}




function minAndMaxWithMath(array){
    // Math obiekt wbudowany w js z funkcjami matematycznymi, min,max czy to jest pętlą
    // ... - to operator spread rozdzielający wartości 
    console.log("Min value: "+ Math.min(...array) + " Max Value: " + Math.max(...array) + " With Math functions.")    
}




main();