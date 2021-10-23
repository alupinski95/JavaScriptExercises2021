function main() {
    console.log("Till friday: " +untilFriday()+ " days");  
}


function untilFriday(){
    let day = new Date(Date.now()).getDay();

    return (5-day <=0)? 7 -day + 5: 5- day  ;
}

main();