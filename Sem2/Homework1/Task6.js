// 6)	Write function that translates a text to Pig Latin and back. 
//     English is translated to Pig Latin by taking the first letter of every word, 
//     moving it to the end of the word and adding ‘ay’. 
//     “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.
class TranslateEnPig{
    enToPig(str){
        let text = str.split(' ').map(element => {
            let first = element.charAt(0);
            element = element.substring(1) +first + "ay";
            return element;
        }).join(" ");
        return text;
    }
    pigToEn(str){
        let text = str.split(' ').map(element => {
            const first = element.charAt(element.length - 3);
            element = first + element.substring(0,element.length - 3);
            return element;
        }).join(" ");
        return text;
    }
}
class Translator{
    constructor(textToBeTranslated, transaleMethod){
        this.textToBeTranslated = textToBeTranslated;
        this.transaleMethod = transaleMethod;
    }
    Translate(){
        return this.transaleMethod(this.textToBeTranslated);
    }
}
function main(str){
    let transaleMethods= new TranslateEnPig();
    const translatorToPig = new Translator(str,transaleMethods.enToPig);
    let pig = translatorToPig.Translate();
    console.log(pig);
    const translatorToEn = new Translator(pig,transaleMethods.pigToEn);
    let en = translatorToEn.Translate();
    console.log(en);
    
}


main("The quick brown fox");