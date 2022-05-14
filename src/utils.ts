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
export function validateMessageLength(message: string, maxLength: number) {
  if (Number.isInteger(maxLength) === false) {
    throw new Error("You cant make incomplete words")
  }
  return message.length < maxLength;
}
export function getRandomFloatInRange(min: number, max: number, precision: number) {
  if (Number.isInteger(precision) === false) {
    throw new Error("where the float point going?")
  }
  if (Number.isFinite(min) === false) {
    throw new Error("Not a finite or existing number")
  }
  if (Number.isFinite(max) === false) {
    throw new Error("Not a finite or existing number")
  }
  const factor = 10 ** precision
  const value = getRandomIntInRange(
    Math.ceil(min * factor),
    Math.floor(max * factor)
  );
  return value / factor
}
export function getRandomItem<T>(items: T[]): T {
  return items[getRandomIntInRange(0, items.length)]
}
interface withWeight<T>{
  item:T;
  weight:number;
} 
const inflate = <T>(item:T)=>({item,weight:Math.random()})
const deflate = <T>({item}:withWeight<T>)=>item;
const compareByWeight = <T>(a:withWeight<T>,b:withWeight<T>)=>a.weight-b.weight;
export const getRandomSubSet= <T>(items: T[]):T[]=>items.map(inflate).sort(compareByWeight).map(deflate).slice(getRandomIntInRange(0,items.length))
