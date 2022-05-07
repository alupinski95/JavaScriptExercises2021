//1)	Write a program that prints all prime numbers in given range. Take sub from 1-100.
function isPrimeNumber(number){
    if(number===1) return true;

    for (let index = 2; index < number; index++) {
        if(number%index==0)
            return false;
        
    }
    return true;
}

function main(){
    for(let i= 1; i<=100;i++){
        if(isPrimeNumber(i)) console.log(i);// +" is a priem number")
    }
}
main();