let yearsArray = [1974, 1900, 1985, 2000];
let leapYears = [];


function main(){
    leapYear_1Simple(yearsArray);

    leapYear_2Foreach(yearsArray);

    leapYear_3Filter(yearsArray);
}

function addIfLeapYear(array, year){
    if(year%4 === 0)
       array.push(year);
    // array.push(year%4 === 0);
}

function leapYear_1Simple(array){
    leapYears = [];
    for(let i = 0; i<array.length;i++){
        addIfLeapYear(leapYears,array[i]);
    }
    console.log("Function leapYear_1Simple resoult: " + leapYears);
}

function leapYear_2Foreach(array){
    leapYears = [];
    array.forEach(element => {
        addIfLeapYear(leapYears,element);
    });
    console.log("Function leapYear_2Foreach resoult: " + leapYears);
}

function leapYear_3Filter(array){
    leapYears = array.filter(element =>{
        if(element%4===0) 
            return element;
        //return element%4===0
    });
    console.log("Function leapYear_3Filter resoult: " + leapYears);
}

main();