const randomNumberFromRange = (multiplier) => {
//  const now = new Date();
//  const seed = (now.getHours() * 3600) + (now.getMinutes() * 60) + now.getSeconds();
// const randomNumber=Math.floor(Math.random()*multiplier*seed/86400);
  const randomNumber=Math.floor(Math.random()*multiplier);
  return randomNumber;
}

const isEven = (number) => {
  return number % 2 === 0;
}

const findGCD = (a, b) => {
  if (b === 0 ) { return a };
  while (b !==0 ) { let c = a; a = b; b = c % b; }
  return a;
}

export  {randomNumberFromRange, isEven, findGCD}
