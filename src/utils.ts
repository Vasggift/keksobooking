export function getRandomIntInRange(min: number, max: number) {
  if (Number.isInteger(min) === false) {
    throw new Error("min must integer")
  }
  if (Number.isInteger(max) === false) {
    throw new Error("max must integer")
  }
  if (min >= max) {
    throw new Error('Min is bigger than max, not good"')
  }
  return Math.floor((max - min) * Math.random() + min)
}
export function validateMessageLength(message:string,maxLength:number){
  if (Number.isInteger(maxLength)===false){
    throw new Error("You cant make incomplete words")
  }
  return message.length<maxLength;
}
export function getRandomFloatInRange(min:number,max:number,precision:number){
  if(Number.isInteger(precision)===false){
    throw new Error("where the float point going?")
  }
  if(Number.isFinite(min)===false){
    throw new Error("Not a finite or existing number")
  }
  if(Number.isFinite(max)===false){
    throw new Error("Not a finite or existing number")
  }
  const factor = 10**precision
  const value = getRandomIntInRange(
    Math.ceil (min*factor),
    Math.floor (max*factor)
  );
  return value/factor
}