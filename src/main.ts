import {getRandomIntInRange,validateMessageLength} from "./utils.js"
const inpMin= 2;
const inpMax= 5 ; 
console.log(getRandomIntInRange(inpMin,inpMax))
console.log(validateMessageLength("Bababababa",3)) 
console.log(validateMessageLength("Bababababa",33)) 
console.log(validateMessageLength("Bababababa",3.232)) 
console.log(validateMessageLength("312312",45))