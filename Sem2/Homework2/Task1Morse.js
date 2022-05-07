'use strict';
const arrayHelper = { 
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
  };

class TranslatorN{
    constructor(textToBeTranslated, transaleMethod){
        this.textToBeTranslated = textToBeTranslated;
        this.transaleMethod = transaleMethod;
    }
    Translate(){
        return this.transaleMethod(this.textToBeTranslated);
    }
}

class Moorse{
    
    constructor(){
        Object.keys(arrayHelper).map(element =>{
            arrayHelper[arrayHelper[element]] = element;
            // this.arrayHelper[element] = this.arrayHelper[element];
        });
    }
    englishToMorse(text){
        return text
        .split(' ')
        .map(
          a => {
              let help="";
              [...a]
            .forEach(element => {
                help+= arrayHelper[element]+" ";
            });
            return help;
        }
        ).join('   ');
    }
    morseToEnglish(text){
        return text
        .split('   ')
        .map(
          a => a
            .split(' ')
            .map(
              b => arrayHelper[b]
            ).join('')
        ).join(' ');
    }
}

function main(textToTranslate){
    let moorse = new Moorse();

    let translateToEN = new TranslatorN(textToTranslate,moorse.morseToEnglish);
    let en = translateToEN.Translate();
    console.log(en);
    let translateToMorse = new TranslatorN(en,moorse.englishToMorse);
    console.log(translateToMorse.Translate());

}
main(".-- --- .-. -..   .-- --- .-. -..");


