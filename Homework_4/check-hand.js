const colorByValue = ['♥', '♦', '♣', '♠']
const cardByValue = ['', 'As', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

function checkHand(cards) {
    let sorted = cards.sort(compareObjects);
    let result = chechIsPokerOrStrit(sorted);
    if (!result)
        result = chechIsPairThreeOrFour(sorted);
    if (!result)
        result = checkIsHighOrFlush(sorted);
    return result;
}

function compareObjects(a, b) {
    return a.value - b.value;
}

function isColorSame(sumofColor) {
    return sumofColor % 5 == 0;
}

function chechIsPokerOrStrit(cards) {
    let pattern = '1,2,3,4,5,6,7,8,9,10,11,12,13,1';
    let handPattern = '';
    let sumOfColors = 0;
    let isColor = false;

    cards.forEach(element => {
        handPattern += element.value.toString() + ',';
        sumOfColors += element.color;
    });

    isColor = isColorSame(sumOfColors);

    if (handPattern.includes('10,11,12,13') &&
        handPattern.includes('1')) {
        return (isColor) ? "Royal flush" : "Straight";
    }
    else if (pattern.includes(handPattern)) {
        return (isColor) ? "Straight flush" : "Straight";
    }
    else return null;
}

function chechIsPairThreeOrFour(cards) {
    let arrayHand = [];
    let newSetLength = 0;
    cards.forEach(s => {
        if (arrayHand[s.value]) {
            arrayHand[s.value] += 1
        } else {
            arrayHand[s.value] = 1;
            newSetLength++;
        }
    });
    if (newSetLength == 4) {
        return 'One pair' + cardToDisplay(cards, arrayHand.indexOf(2));
    }
    if (newSetLength == 3) {
        if (arrayHand.indexOf(3) != -1 && arrayHand.indexOf(2) != -1)
            return 'Three of a kind' + cardToDisplay(cards, arrayHand.indexOf(3));
        return 'Two pair' + cardToDisplay(cards, arrayHand.indexOf(2));
    }
    if (newSetLength == 2) {
        if (arrayHand.indexOf(4) != -1)
            return 'Four of a kind' + cardToDisplay(cards, arrayHand.indexOf(4));
        return 'Full house' + cardToDisplay(cards);
    }
    return null;
}

function checkIsHighOrFlush(cards) {
    let sumOfColors = 0;

    cards.forEach(element => {
        sumOfColors += element.color;
    });
    if (isColorSame(sumOfColors)) {
        return 'Flush ' + cardToDisplay(cards);
    }
    return 'High card ' + cards[cards.length - 1];
}


function cardToDisplay(arrayofCards, firstIndex, seconmdIndex) {
    let resoult = ' ';
    arrayofCards.forEach(x => {
        if (firstIndex && firstIndex == x.value) {
            resoult += cardByValue[x.value] + colorByValue[x.color];
        }
        else if (seconmdIndex && seconmdIndex == x.value) {
            resoult += cardByValue[x.value] + colorByValue[x.color];
        }
        else if (!firstIndex && !seconmdIndex) {
            resoult += cardByValue[x.value] + colorByValue[x.color];
        }
    });
    return resoult;
}


module.exports = {
    checkHand: checkHand
}