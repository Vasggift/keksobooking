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