
function main() {
    let obj = basicOperationObject(5,4)
    console.log("Object with 4 basic arithmetic operations: \n Sum: " + obj.sum
    + "\n substraction: " + obj.substraction
    + "\n multiplication: " + obj.multiplication
    + "\n division: " + obj.division);  
}


function basicOperationObject(num1,num2){
    return obj ={
        sum:num1+num2,
        substraction: num1-num2,
        multiplication: num1*num2,
        division: num1/num2
    }
}

main();