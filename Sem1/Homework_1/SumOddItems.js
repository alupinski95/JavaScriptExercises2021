// /niep

let numberOfArray = [1,6,23,8,4,98,3,7,3,98,4,98];

function main(){
    sumOddItemsFor(numberOfArray);
    
    sumOddItemsForEach(numberOfArray);

    sumWithReduce(numberOfArray);
}

function sumOddItemsFor(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {        
        if(array[i]%2 !== 0)
            sum += array[i];
    }
    console.log("Sum of items with loop for: " + sum);
}

function sumOddItemsForEach(array){
    let sum = 0;
    array.forEach(element => {
        if(element%2 !== 0)
            sum += element;
    });
    console.log("Sum of items  with loop foreach: " + sum);
}

function sumWithReduce(array){ 
    let sum = array.reduce( //funkcja wywoływana na tablicy przyjmująca jako parametr funkcję i opcjonalnie startową wartość
        (partial_sum, a) =>{                                    //funkcja  która przyjmuje max 4 argumenty, accumulator - do tej wartości dodajemy wartości 
            if((a%2 !== 0)) return partial_sum + a;             // current_value - aktualna wartość z tablicy która jest przetwarzana 
            else return partial_sum;                            // opcjonalnie - index
        },                                                      // opcjonalnie - array - przetwarzana tablica
        0 // opcjonalna, początkowa wartość (do niej dodawane są wartości)
        ); 
        //https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    console.log("Sum of items with reduce: " + sum);
}

main();