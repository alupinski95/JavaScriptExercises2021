// 3)	Given two strings, write a program that efficiently finds the longest common subsequence. ‘karol rolki’
// 1 pozbyć sie tych które są różne dla obu

"use strict";

class FindComonSubstring {
    constructor(firstString, secondString) {
        this.firstString = firstString.toLowerCase();
        this.secondString = secondString.toLowerCase();
    }

    FindComonSubstring() {
        let i = this.firstString.length;
        let longestSubstr = "";
        while (longestSubstr.length === 0) {
            for (let y = 0; y <= this.firstString.length - i; y++) {
                let substr = this.firstString.substr(y, i);
                if (this.secondString.includes(substr)) {
                    longestSubstr = substr;
                    break
                }
            }
            i = i - 1;
        }
        return longestSubstr;
    }

}

function main(stringOne, stringTwo) {
    let findComonString = new FindComonSubstring(stringOne, stringTwo);
    console.log(findComonString.FindComonSubstring());
}

main("karol", "rolki");