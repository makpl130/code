import { randomNumberFromRange } from '../src/math.js'
import { gameEngine } from '../src/template.js'

const generateGameData = () => {
  let data = [[], [], []]

  for (let i = 0; i < 3; i += 1) {
    const progressionLength = 10 - randomNumberFromRange(5)
    const progressionStart = randomNumberFromRange(50)
    const progressionIncrement = randomNumberFromRange(10)
    let progressionArray = []
    let element
    for (let j = 0; j < progressionLength; j += 1) {
      element = progressionStart + progressionIncrement * j
      progressionArray[j] = element.toString()
    }
    const secretElementPosition = randomNumberFromRange(progressionLength - 1)
    const secretElement = Number(progressionArray[secretElementPosition])
    progressionArray[secretElementPosition] = '..'
    let question = ''
    for (let j = 0; j < progressionLength; j += 1) {
      question += `${progressionArray[j]} `
    };
    const answer = secretElement.toString()
    data[i].push(question)
    data[i].push(answer)
  }
  return data
}

const brainProgression = () => {
  const gameQuestion = `What number is missing in the progression?`
  const gameData = generateGameData()
  gameEngine (gameQuestion, gameData)
}

export { brainProgression }
