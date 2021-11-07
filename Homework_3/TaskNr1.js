let task1Funct = (function(){
    let value;
    let setValue = function(newVal){
        value = newVal;
    };
    let getValue = function(){
        if (!value)
            return "No value set!!!";
        return value;
    };
    let reverseValue = function(){
        if (!value)
            return "No value set to reverse!!!";
        return (typeof(value) == "string")? value.split("").reverse().join("") : value *(-1);
    }
    return {
        setValue: setValue,
        showValue: getValue,
        reverseValue:reverseValue
    }
})();

console.log(task1Funct);
console.log(task1Funct.reverseValue());
console.log(task1Funct.showValue());
task1Funct.setValue(5);
console.log(task1Funct.showValue());
console.log(task1Funct.reverseValue());
task1Funct.setValue("AlaMaKota");
console.log(task1Funct.showValue());
console.log(task1Funct.reverseValue());
