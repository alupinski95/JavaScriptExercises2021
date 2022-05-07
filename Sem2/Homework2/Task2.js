"use strict";
class CheckPalindrome{
    constructor(variableToCheck,checkingFunction){
        this.variableToCheck = variableToCheck;
        this.checkingFunction = checkingFunction;
    }
    Check(){
        return this.checkingFunction(this.variableToCheck);
    }
    FindLongestPalindrome(){
        let i = this.variableToCheck.length;
        let longestPalindrome="";
        while(i>1){
            for(let y= 0; y<=this.variableToCheck.length -i;y++){
                let substr = this.variableToCheck.substr(y,i);
                if(this.checkingFunction(substr)){
                    longestPalindrome = substr;
                    i=1;
                    break
                }
            }
            i=i-1;
        }
        return longestPalindrome;
    }
}


class CheckPalindromeFunctionsByType{
    isNumberPalindrome(a){

    }
    isStringPalindrome(string){
        var reverse = string.split("").reverse().join("");
        return string === reverse;
    }
}


function main(text){
    let checkPalindromeFunctionsByType = new CheckPalindromeFunctionsByType()
    let chcecker = new CheckPalindrome(text,checkPalindromeFunctionsByType.isStringPalindrome);
    console.log(`Longest palindrome in: ${text} is " ${chcecker.FindLongestPalindrome()} "`);
}
main("vcxasdsadwaqwd");
main("karakis");
main("kajak");
main("baerren");
