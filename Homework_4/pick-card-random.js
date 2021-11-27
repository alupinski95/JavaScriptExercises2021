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

module.exports = {
    pickFiveRandomCards: pickFiveRandomCards
}