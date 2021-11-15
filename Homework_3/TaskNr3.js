
// 3) Create an array (by hand) of objects and call sum() function in context of 
// each one of them. Sum function is to come from this object 


let BaseObject = 
{  x:Number,
    y:Number,
    sum: function (){ return this.x+this.y}};
    
const array = [{x:2,y:3},{x:-1,y:6},{x:0,y:8},{x:3,y:8}]

function main(){
    array.forEach(element => {
        console.log(element)
        console.log(BaseObject.sum.call(element));

    });
}


main();