const ballsArray = [1, 1, 1, 1, 1, 1, 1, 2];

function main() {
    let allIndexTab= [0,1,2,3,4,5,6,7];
    let initialArrayLength = ballsArray.length;
    let compareSet1 = [];
    let compareSet2 = [];
    let compareSet3 = [];

    for (; allIndexTab.length > 0; ) {
        let randomIndex = getRandomIndex(allIndexTab.length);
        
        let obj = {
            index: allIndexTab[randomIndex],
            value: ballsArray[allIndexTab[randomIndex]],
        };

        if (initialArrayLength - 3 < allIndexTab.length) {
            compareSet1.push(obj);
        } else if (initialArrayLength - 3 > allIndexTab.length && initialArrayLength - 6 <= allIndexTab.length) {
            compareSet2.push(obj);
        } else {
            compareSet3.push(obj);
        }
        allIndexTab.splice(randomIndex, 1);
    }

    let heaviestIndex = compareSets(compareSet1, compareSet2, compareSet3);
    console.log("Heaviest ball is on index: " + heaviestIndex)
}

function compareSets(compareSet1, compareSet2, compareSet3) {
    let sum1 = sumWeightOfSet(compareSet1);
    let sum2 = sumWeightOfSet(compareSet2);
    if (sum1 == sum2) {
        return returnHeavierIndex(compareSet3[0], compareSet3[1]);
    } else if (sum1 > sum2) {
        return returnHeavierIndex(compareSet1[0], compareSet1[1], compareSet1[2]);
    } else {
        return returnHeavierIndex(compareSet2[0], compareSet2[1], compareSet2[2]);
    }
}

function returnHeavierIndex(firstVal,secVal, thirdVal){
    if(firstVal.value == secVal.value){
        return thirdVal.index;
    }else if(firstVal.value > secVal.value){
        return firstVal.index;
    }else{
        return secVal.index;
    }
}

function sumWeightOfSet(set) {
    return set[0].value + set[1].value + set[2].value;
}

function getRandomIndex(max) {
    return Math.floor(Math.random() * (max - 1));
  }
main();

