let factorial = 1;

function main(){
    let numberForFactorial = 7
    factorialFor(numberForFactorial);
    factorialWhile(numberForFactorial);
    factorialDoWhile(numberForFactorial);
}

function factorialFor(num){
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    console.log("Factorial from function: " + factorialFor.name);
    console.log("Factorial of: " + num + " equal: " + factorial);
}

function factorialWhile(num){
    let factorial = 1;
    let iter = 1;
    while(iter <=num){
        factorial *= iter;
        iter++;
    }
    console.log("Factorial from function: " + factorialWhile.name);
    console.log("Factorial of: " + num + " equal: " + factorial);
}

function factorialDoWhile(num){
    let factorial = 1;
    let iter = 1;
    do{
        factorial *= iter;
        iter++;
    }
    while(iter<=num);
    console.log("Factorial from function: " + factorialDoWhile.name);
    console.log("Factorial of: " + num + " equal: " + factorial);
}


main();