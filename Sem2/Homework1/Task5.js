// 5)	Write a code that takes a number/string and returns a list of its digits. 
//     So for 2342 it should return [2,3,4,2].’A243b’ -> [2,4,3].



function main(string){
    let array = [];
    for (let index = 0; index < string.length; index++) {
        const element = string.charAt(index);
        if(!isNaN(parseFloat(element))){
            array.push(element);
        }
    }
    console.log(array);
}



main("A9483Ds4");