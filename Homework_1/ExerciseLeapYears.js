let yearsArray = [1974, 1900, 1985, 2000];
let leapYears = [];


function main(){
    leapYear_1Simple(yearsArray);

    leapYear_2Foreach(yearsArray);

    leapYear_3Filter(yearsArray);
}

function addIfLeapYear(array, year){
    if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
       array.push(year);
    // array.push(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0));
}

function leapYear_1Simple(array){
    let leapYears = [];
    for(let i = 0; i<array.length;i++){
        addIfLeapYear(leapYears,array[i]);
    }
    console.log("Function leapYear_1Simple resoult: " + leapYears);
}

function leapYear_2Foreach(array){
    let leapYears = [];
    array.forEach(element => {
        addIfLeapYear(leapYears,element);
    });
    console.log("Function leapYear_2Foreach resoult: " + leapYears);
}

function leapYear_3Filter(array){
    let leapYears = array.filter(element =>{
        if(((element % 4 == 0) && (element % 100 != 0)) || (element % 400 == 0)) 
            return element;
        //return ((element % 4 == 0) && (element % 100 != 0)) || (element % 400 == 0)
    });
    console.log("Function leapYear_3Filter resoult: " + leapYears);
}

main();