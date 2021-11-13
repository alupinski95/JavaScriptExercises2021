// losujesz 5 kart i wykrywasz najwyższy ukłąd
// https://m.media-amazon.com/images/I/71xmLOiiywL._AC_SY741_.jpg




function getRandomIndex(max) {
    return Math.floor(Math.random() * (max)) + 1;
}

function pickFiveRandomCards(cardToPick) {
    let pickedCards = []
    let arrayCheckIsPicked = Array.from(Array(14), () => new Array(5));
    for (; cardToPick;) {
        let val = getRandomIndex(13), col = getRandomIndex(4);
        let newCard = {
            value: val,
            color: col
        }
        if (arrayCheckIsPicked || !arrayCheckIsPicked[val][col]) {
            pickedCards.push(newCard);
            arrayCheckIsPicked[val][col] = 'x';
            cardToPick -= 1;
        }
    }
    return pickedCards;
}
function checkHand(cards) {
    let sorted = cards.sort(compareObjects);
    let nameOfHand = chechIsPokerOrStrit(sorted);
    if (!nameOfHand)
        nameOfHand = chechIsPairThreeOrFour(sorted);
    if (!nameOfHand)
        nameOfHand = checkIsHighOrFlush(sorted);
    return nameOfHand;
}

function compareObjects(a, b) {
    return a.value - b.value;
}

function main() {
    let pickedCards = pickFiveRandomCards(5);
    console.log(checkHand(pickedCards));
}
function isColorSame(sumofColor) {
    return sumofColor % 5 == 0;
}
function chechIsPokerOrStrit(cards) {
    let pattern = '1,2,3,4,5,6,7,8,9,10,11,12,13,1';
    let handPattern = '';
    let sumOfColors = 0;

    cards.forEach(element => {
        handPattern += element.value.toString() + ',';
        sumOfColors += element.color;
    });

    if (handPattern.includes('10,11,12,13') &&
        handPattern.includes('1')) {
        return (isColorSame(sumOfColors)) ? "Royal flush" : "Straight";
    }
    else if (pattern.includes(handPattern)) {
        return (isColorSame(sumOfColors)) ? "Straight flush" : "Straight";
    }
    else return null;
}

function chechIsPairThreeOrFour(cards) {
    let arrayHand = [];
    let newSetLength = 0;
    cards.forEach(s=>{
        if(arrayHand[s.value] )
        {
            arrayHand[s.value] +=1
        } else
        {
            arrayHand[s.value] =1;
            newSetLength++;
        } 
    });

    
    if(newSetLength ==4){
        return 'One pair';
    }
    if(newSetLength==3){
        if(arrayHand.indexOf(3)!=-1&& arrayHand.indexOf(2)!=-1)
            return 'Three of a kind';
        return 'Two pair';
    }
    if(newSetLength==2){
        if(arrayHand.indexOf(4)!=-1)
            return 'Four of a kind';
        return 'Full house';
    }
    return null;
}

function checkIsHighOrFlush(cards) {
    let sumOfColors = 0;

    cards.forEach(element => {
        sumOfColors += element.color;
    });
    if(isColorSame(sumOfColors)){
        return 'Flush';
    }
    return 'High card';
}
main();