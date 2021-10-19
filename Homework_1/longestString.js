let stringArray = ['Karol','Adam','Rogowski','Politechnika','Super','Weekend'];



function main(){
    getLongestStringInArray(stringArray);
    getLongestBySort(stringArray);
}

function getLongestStringInArray(array){
    let stringHelper = [];
    let length = 0;
    array.forEach(element => {
        if(element.length > length){
            stringHelper = [];
            stringHelper.push(element);
            length = element.length;
        }
        else if(element.length == length){
            stringHelper.push(element);
        }
    });
    console.log('Longest string in Array with loop: ' + stringHelper);
}

function getLongestBySort(array){
    var longest = array.sort(
        function (a, b) {
            return b.length - a.length;
        }
    )[0];
    console.log('Longest string in Array by Sort(): ' + longest);

}
main();