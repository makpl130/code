import crypto from 'crypto'

const randomNumberFromRange = (multiplier) => {
  const randomNumber = crypto.randomInt(multiplier) + 1
  //    const randomNumber=Math.floor(Math.random()*multiplier);
  return randomNumber
}

const isEven = (number) => {
  return number % 2 === 0
}

const isPrime = (number) => {
  if (number < 2) {
    return false
  };
  if (number === 2) {
    return true
  };
  if (isEven(number)) {
    return false
  };
  const upperLimit = Math.trunc(Math.sqrt(number) + 1)
  for (let j = 3; j <= upperLimit; j += 2) {
    if (number % j === 0) {
      return false
    }
  }
  return true
}

const findGCD = (a, b) => {
  if (b === 0) {
    return a
  };
  while (b !== 0) {
    let c = a
    a = b
    b = c % b
  }
  return a
}

/*
for (let j = 1; j <=100; j += 1 ) {
console.log(`${j} is ${isPrime(j)}`);
}
*/

export { randomNumberFromRange, isEven, findGCD, isPrime }
