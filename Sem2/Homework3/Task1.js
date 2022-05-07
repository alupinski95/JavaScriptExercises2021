"use strict";

const treasureArray = [
    [34 , 21 , 32 , 41 , 25],
    [14 , 42 , 43 , 14 , 31],
    [54 , 45 , 52 , 42 , 23],
    [33 , 15 , 51 , 31 , 35],
    [21 , 52 , 33 , 13 , 23],
]


class TreasureHunt{
    constructor(treasureArray){
        this.treasureArray = treasureArray;
        this.actualValue= 11;
        
    }
    
    findTreasure(){
        let actualPosColRow = this.getNextStep(this.actualValue);
        while(this.treasureArray[actualPosColRow.row][actualPosColRow.col]!==this.actualValue){
            if(!this.treasureArray[actualPosColRow.row][actualPosColRow.col])
            {
                console.log("Infinitive loop.Fake treasure map.");
                break
            }
            console.log(this.actualValue + " go to " +this.treasureArray[actualPosColRow.row][actualPosColRow.col]);
            this.actualValue =this.treasureArray[actualPosColRow.row][actualPosColRow.col];
            this.treasureArray[actualPosColRow.row][actualPosColRow.col]=0;
            actualPosColRow = this.getNextStep(this.actualValue);
        }
        console.log("End with: " + this.actualValue );

    }

    getNextStep(number){
        let col = number%10;
        let row = (number-col)/10;
        return {row:row-1,col:col-1};
    }
}
function main(){
    let treasureHunt = new TreasureHunt(treasureArray);
    treasureHunt.findTreasure();
}
main();