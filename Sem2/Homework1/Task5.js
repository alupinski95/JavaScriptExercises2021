// 5)	Write a code that takes a number/string and returns a list of its digits. 
//     So for 2342 it should return [2,3,4,2].’A243b’ -> [2,4,3].
"use strict";
class NumbersFromStringToArray{
    constructor(text){
        this.text = text;
        this.array=[];
    }
    GetArrayOfNumbersFromString(){
        for (let index = 0; index < this.text.length; index++) {
            const element = this.text.charAt(index);
            if(!isNaN(parseFloat(element))){
                this.array.push(element);
            }
        }
    }
    getArray(){
        return this.array;
    }
}

function main(string){
    let numbersFromStringToArray = new NumbersFromStringToArray(string);
    numbersFromStringToArray.GetArrayOfNumbersFromString();
    console.log(numbersFromStringToArray.getArray());
}



main("A9483Ds4");