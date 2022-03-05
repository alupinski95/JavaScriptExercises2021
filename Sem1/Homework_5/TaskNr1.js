// 1) Show a result of Josephus Problem for 7 soldiers.
// Display in the console log below
//         a. 1 Kills 2
//         b. 3 Kills 4
//         c. 5 Kills 6
//         d. 7 Kills 1
//         e. 3 Kills 5
//         f. 7 Kills 3
//         g. 7 Remains alive

let array = []; 
function createArray(lenght) { 
    for (let index = 0; index < lenght; index++) { 
        array[index] = index + 1; 
    } 
} 
function josephusProblem(personCounter) { 
    let arrayHelper = []; 
    for (let index = 0; index < personCounter; index += 2) { 
        if (!array[index + 1]) { 
            arrayHelper.unshift(array[index]) 
        } 
        else { 
            console.log(array[index] + " kills " + array[index + 1]); 
            arrayHelper.push(array[index]); 
        } 
    } 
    array = []; 
    array.push(...arrayHelper); 
} 
 
 
 
 
 
function main(personCounter, step) { 
    createArray(personCounter); 
    while (array.length != 1) 
        josephusProblem(array.length); 
 
    console.log(array[0] + " Remains alive"); 
 
} 
main(8, 2); 
