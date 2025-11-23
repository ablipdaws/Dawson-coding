const friend = 'BRUTUS';
const shiftValue = 3;
//Step1
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//Step2
const firstLetter = friend[0];
const index = alphabet.indexOf(firstLetter.toLowerCase());
//Q1
//The index is 1 instead of 2 because arrays are indexed starting at "0"; 0 = A, 1 = B
//Step3
const newIndex = index + shiftValue;
const encryptedFirstLetter = alphabet[newIndex];
//Q2
//the modulus operator (%)
//Step4
//const alphabetLength = alphabet.length;
//Step5
const alphabetLength = alphabet.length;
const newIndex2 = (index + shiftValue) % alphabetLength;
const encryptedSecondLetter = alphabet[newIndex2];
//Step6
friend.slice(0, 3);






