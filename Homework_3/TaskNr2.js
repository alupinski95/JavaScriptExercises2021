function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function multiplication(a,b){
    return a*b;
}
function division(a,b){
    return a/b;
}

let calculate  = (function(){ 
    let value = {a:Number,b:Number};
    function setOperation(anum,bnum){
        value.a = anum;
        value.b = bnum;
    }
    function calculate(){
        return { 
            add: this.add(value.a,value.b),
            sub: this.sub(value.a,value.b),
            Multiplication: this.multiplication(value.a,value.b),
            Division: this.division(value.a,value.b)
        }
    }
    return {
        add: add,
        sub: sub,
        multiplication:multiplication,
        division:division,
        setOperation:setOperation,
        calculate:calculate
    }
})();


calculate.setOperation(3,4);
console.log(calculate.calculate());