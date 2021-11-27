// losujesz 5 kart i wykrywasz najwyższy ukłąd
// https://m.media-amazon.com/images/I/71xmLOiiywL._AC_SY741_.jpg

const checkHand = require("./check-hand");
const pickCards = require("./pick-card-random");


function main() {
    let pickedCards = pickCards.pickFiveRandomCards(5);
    console.log("You got: " + checkHand.checkHand(pickedCards));
}

main();

// 