import { randomNumberFromRange, isPrime } from '../src/math.js'
import { gameEngine } from '../src/template.js'

const generateGameData = () => {
  let data = [[], [], []]

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = randomNumberFromRange(100)
    const boolRigthAnswer = isPrime(randomNumber)
    const answer = boolRigthAnswer === true ? 'yes' : 'no'
    const question = randomNumber.toString()
    data[i].push(question)
    data[i].push(answer)
  }
  return data
}

const brainPrime = () => {
  const gameQuestion = `Answer "yes" if given number is prime. Otherwise answer "no".`
  const gameData = generateGameData()
  gameEngine (gameQuestion, gameData)
}

export { brainPrime }
