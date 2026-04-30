import { randomNumberFromRange } from '../src/math.js'
import { gameEngine } from '../src/template.js'

const generateGameData = () => {
  let data = [[], [], []]
  let question
  let answer

  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = randomNumberFromRange(21)
    const randomNumber2 = randomNumberFromRange(21)
    const randomAction = randomNumberFromRange(2)
    switch (randomAction) {
      case 0:
        question = `${randomNumber1} + ${randomNumber2}`
        answer = randomNumber1 + randomNumber2
        break
      case 1:
        question = `${randomNumber1} - ${randomNumber2}`
        answer = randomNumber1 - randomNumber2
        break
      case 2:
        question = `${randomNumber1} * ${randomNumber2}`
        answer = randomNumber1 * randomNumber2
        break
    }
    data[i].push(question)
    data[i].push(answer)
  }
  return data
}

const brainCalc = () => {
  const gameQuestion = `What is the result of the expression?`
  const gameData = generateGameData()
  gameEngine (gameQuestion, gameData)
}

export { brainCalc }
