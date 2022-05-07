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

let calculation = (function (x, y) {
    let innerObject = {
      param: {
        x: x,
        y: y,
      },
      mathOperation: null,
      setOperation: setOperation,
      calculate: calculate,
    };
  
    function setOperation(mathOperation) {
      this.mathOperation = mathOperation;
    }
  
    function calculate() {
      return this.mathOperation(this.param.x, this.param.y);
    }
    return innerObject;
  })(4, 3);
  
  calculation.setOperation(add);
  console.log(calculation.calculate());

