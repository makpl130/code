import { gameEngine } from '../src/template.js'
import { findGCD, randomNumberFromRange } from '../src/math.js'

const generateGameData = () => {
  let data = [[], [], []]
  let randomNumber1
  let randomNumber2
  let question
  let answer
  for (let i = 0; i < 3; i += 1) {
    while (randomNumber1 === randomNumber2) {
      randomNumber1 = (randomNumberFromRange(78) + 1)
      randomNumber2 = Math.floor((randomNumber1 * randomNumberFromRange(3) / 3
        + randomNumber1 * randomNumberFromRange(7) / 4))
    }
    question = `${randomNumber1} ${randomNumber2}`
    answer = findGCD(randomNumber1, randomNumber2).toString()
    data[i].push(question)
    data[i].push(answer)
    randomNumber1 = randomNumber2
  }
  return data
}

const brainGCD = () => {
  const gameQuestion = `Find the greatest common divisor of given numbers.`
  const gameData = generateGameData()
  gameEngine (gameQuestion, gameData)
}

export { brainGCD }
