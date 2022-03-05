// 2)	Write a guessing game where the user has to guess a secret number. 
//     After every guess the program tells the user whether their number was too large or too small. 
//     At the end the number of tries needed should be printed.
//     It counts only as one try if they input the same number multiple times consecutively. Range 1-100.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let numberToGues = 0;
let guesCounter = 0;
let userGuess =-1;

function main(){
    console.log("Generate number to guess");
    numberToGues = Math.round(Math.random() * 100)+1;
    console.log("Number generated " + numberToGues)

    guessNumber();

}

async function guessNumber(){
    await getNumberFromUser().then(()=>{
        if(userGuess===numberToGues){
            console.log("You guess the number!!! Number of atempts: " + guesCounter);
            rl.close();
            return;
        } else if (userGuess>numberToGues){
            console.log("This number ist too big. Try again!!!");
            guessNumber();
        }
        else if (userGuess<numberToGues){
            console.log("This number ist too small. Try again!!!");
            guessNumber();
        }
    });    
}
function getNumberFromUser(){
    return new Promise((resolve,reject)=>{
        rl.question("Please enter your guess number:", answ => {
            if(userGuess != Number.parseInt(answ))
            {
                guesCounter+=1;
                userGuess = Number.parseInt(answ);
            }
            resolve();
        });
        
    })
}
main();