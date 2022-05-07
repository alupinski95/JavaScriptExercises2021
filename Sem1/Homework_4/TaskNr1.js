String.prototype.reverse = function(){
    return this.split("").reverse().join("");
}

function main(){
    console.log("Ala ma kota".reverse());
}
main();