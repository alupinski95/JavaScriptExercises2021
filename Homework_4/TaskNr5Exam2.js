// losujesz 5 kart i wykrywasz najwyższy ukłąd
// https://m.media-amazon.com/images/I/71xmLOiiywL._AC_SY741_.jpg
let pickedCards = [];
let arrayCheckIsPicked = Array.from(Array(14), () => new Array(5));
console.info(arrayCheckIsPicked);
const colorByValue = ['heart','diamond','club','spade']
function getRandomIndex(max) {
    return Math.floor(Math.random() * (max ))+1;
}
function pickFiveRandomCards(cardToPick){
    for(;cardToPick;){
        let val = getRandomIndex(13),col = getRandomIndex(4); //col = colorByValue[getRandomIndex(3)];
        let newCard = { 
            value:val,
            color: col
        }
        if(arrayCheckIsPicked || !arrayCheckIsPicked[val][col])
        {
            pickedCards.push(newCard);
            arrayCheckIsPicked[val][col] = 'x';
            cardToPick-=1;
        }
    }
}
function main(){
    pickFiveRandomCards(5);

}

main();