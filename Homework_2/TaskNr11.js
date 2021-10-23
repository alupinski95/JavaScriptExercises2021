function main() {
    console.log("Today is: " +getDayNamePl());  
}


function getDayNamePl(){
    let day = new Date(Date.now());
    let opt = { weekday: 'long'};
    return new Intl.DateTimeFormat('pl-PL',opt).format(day);
}

main();