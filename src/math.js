const randomNumberFromRange = (multiplier) => {
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
