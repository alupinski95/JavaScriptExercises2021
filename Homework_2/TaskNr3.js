let numberArray = [1,6,23,8,4,8,3,7];

function main() {
    let number = 5;
    console.log("Factorial of: " + number + " equal: " + reverseArray(5));
    
}


function reverseArray(num){
    let resoult = 1;
    for (let i = 1; i <= num; i++) {
        resoult = resoult * i;
    }
    return resoult;
}
main();