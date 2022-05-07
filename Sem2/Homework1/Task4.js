// 4)	Write a class that prints the list of the first n Fibonacci numbers.
//     The first two Fibonacci numbers are 1 and 1.
//     The n+1-st Fibonacci number can be computed by adding the n-th and the n-1-th Fibonacci number. 
//     The first few are therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.
class Fibonacci{
    fibbArray = [1,1];
    n = 0;
    constructor(nHelper){
        this.n=nHelper;
    }
    calculateFibonacciToN(){
        for (let index = 2; index <= this.n; index++) {
            this.fibbArray[index] = this.fibbArray[index-1]+ this.fibbArray[index-2];
        }
    }
    printArray(){
        for (let index = 0; index < this.fibbArray.length; index++) {
            console.log("Fibonacci of " +(index+1) + " is: " + this.fibbArray[index]);
        }
    }
}
function main(){
    let fibb = new Fibonacci(6);
    fibb.calculateFibonacciToN();
    fibb.printArray();
}
main();