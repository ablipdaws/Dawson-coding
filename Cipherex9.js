
// Students: Implement encrypt(message, shiftValue) and decrypt(encryptedMessage, shiftValue)
// Requirements:
//  - Shift letters by shiftValue (preserve case)
//  - Characters outside the alphabet are passed through unchanged
//  - After every two characters in the encrypted output, insert a random letter
//    (i.e., the encryption output will be longer than the input)
//  - Decryption must reverse the random-letter insertion and the shift

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const shiftValue = 42
let message = 'When the Pawn hits the Conflicts He Thinks like a King 123'
function encrypt (message, shiftValue)
{
  // Your encryption code here
  // - Use shiftValue (may be >26)
  // - Preserve uppercase / lowercase
  // - Leave non-alphabet characters unchanged
  // - After every two characters in the encrypted string, insert a random letter from alphabet
  let encryptedMessage = "";
  // TODO: implement
    for (let i = 0; i < message.length; i++){
    const character = message [i];
    if (character.toLowerCase() !== character.toUpperCase());
    const isUpperCase = character === character.toUpperCase();
    const baseCode = isUpperCase ? "A".charCodeAt(0) : "a".charCodeAt(0)
    const charCode = character.charCodeAt(0) - baseCode;
    console.log(`Input character is ${charCode} - Basecode is ${baseCode}
      ASCII code is ${character.charCodeAt(0)} and its position in the alphabet is ${character}`
    );
    const newCode = (charPosition + shiftValue + 26) % 26
    console.log(`New secret char is ${String.fromCharCode(baseCode + newCode)}`)
    const encrypted = String.fromCharCode(baseCode + newCode);
    encryptedMessage += encrypted; 
  }
  return encryptedMessage;
}

function decrypt (encryptedMessage, shiftValue)
{
  // Your decryption code here
  // - Remove the random letters inserted after every two characters
  // - Shift characters back by shiftValue to retrieve original text
  let decryptedMessage = "";
  // TODO: implement

  return decryptedMessage;
}
const randomLetter = alphabet[Math.floor(Math.random() * 26)]
//    {
//  console.log(randomLetter);
//} returns 'a' only, added *26 returns 'u' 
//credit https://www.youtube.com/watch?v=l7HzQCiUWPg