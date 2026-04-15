const randomNumberFromRange = (multiplier) => {
  const randomNumber=Math.floor(Math.random()*multiplier);
  return randomNumber;
}

const isEven = (number) => {
  return number % 2 === 0;
}

export  {randomNumberFromRange, isEven}