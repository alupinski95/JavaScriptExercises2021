let arrObj = [
    {
        x: 1,
        y: 'object one value',
        operation: () => 'object one prafix' + this.x + this.y
    },
    {
        x: 2,
        y: 'object two value',
        operation: () => 'object two prefix' + this.x + this.y
    },
    {
        x: 3,
        y: 'object three value',
        operation: () => 'object three prefix' + this.x + this.y
    },
];
let arrObj1 = [
    {
        x: 1,
        y: 'object one value',
        operation: function() {return 'object one prafix' + this.x + this.y}
    },
    {
        x: 2,
        y: 'object two value',
        operation: function() {return 'object one prafix' + this.x + this.y}
    },
    {
        x: 3,
        y: 'object three value',
        operation:  function() {return 'object one prafix' + this.x + this.y}
    },
];
function main(array){
    array.forEach(element => {
        let indexOfElement = array.indexOf(element);
        if(indexOfElement == array.length-1){
            let obj = array[1];
            console.log(element.operation.call(obj));

        }
        else{
            let obj = array[indexOfElement+1];
            console.log( element.operation.call(obj));
        }
    });
}
main(arrObj1);