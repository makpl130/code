import { randomNumberFromRange, isEven } from '../src/math.js'
import { gameEngine } from '../src/template.js'

const generateGameData = () => {
  let data = [[], [], []]

  for (let i = 0; i < 3; i += 1) {
    const question = randomNumberFromRange(100)
    const boolRigthAnswer = isEven(question)
    const answer = boolRigthAnswer === true ? 'yes' : 'no'
    data[i].push(question)
    data[i].push(answer)
  }
  return data
}

const brainEven = () => {
  const gameQuestion = `Answer "yes" if the number is even, otherwise answer "no"`
  const gameData = generateGameData()
  gameEngine (gameQuestion, gameData)
}

export { brainEven }
