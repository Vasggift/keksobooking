import {getRandomIntInRange,validateMessageLength,getRandomFloatInRange} from "./utils.js"
import {disableForms, enableForm} from "./forms.js"
const inpMin= 2;
const inpMax= 5 ; 
console.log(getRandomIntInRange(inpMin,inpMax))
console.log(validateMessageLength("Bababababa",3)) 
console.log(validateMessageLength("Bababababa",33)) 
console.log(validateMessageLength("Bababababa",3)) 
console.log(validateMessageLength("312312",45))
console.log(getRandomFloatInRange(139,140,5))
console.log(getRandomFloatInRange(139,140,5))
console.log(getRandomFloatInRange(139,140,5))
console.log(getRandomFloatInRange(139,140,5))
console.log(getRandomFloatInRange(139,140,5))
console.log(getRandomFloatInRange(139,140,5))
disableForms([...document.forms])
setTimeout(() => {
    enableForm(document.forms[1])
}, 1000);
setTimeout(() => {
    enableForm(document.forms[0])
}, 3000);