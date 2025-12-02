const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encryptLetter (letter, shift){
//    let shift = shiftValue  'shift already declared'
    const index = alphabet.indexOf(letter.toLowerCase)
    const newIndex = (index + shift) % alphabet.length//const newIndex = alphabet[index] 
    return alphabet[newIndex];
}
    let shift = shiftValue; //when declaring shift here, no error no output
    encryptLetter(indexOf, 0); //('B') //,shiftValue); //tried shift and shiftValue :
