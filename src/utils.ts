export function getRandomIntInRange(min:number , max: number){
    if (max>min) 
      { return Math.floor( (max-min) * Math.random() +min) }
    else { return Math.floor( (max-min) * -1 * Math.random() +min) };
}