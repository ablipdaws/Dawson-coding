const friend = 'BRUTUS'
const shiftValue = 3
//Step1
let alphabet = 'abcdefghijklmnopqrstuvwxyz'
//Step2
const firstLetter = friend[0]
friend.replace('B', 'b')
const index = alphabet.indexOf(firstLetter.toLowerCase())
//Q1
//The index is 1 instead of 2 because arrays are indexed starting at "0"; 0 = A, 1 = B
//Step3
const newIndex = index + 3;
const encryptedFirstLetter = alphabet[newIndex];
//Q2
//the modulus operator (%)
//Step4
const alphabetLength = alphabet.length;
//Step5






