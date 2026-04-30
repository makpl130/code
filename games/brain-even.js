import { randomNumberFromRange, isEven } from '../src/math.js'
import { gameEngine } from '../src/template.js'

const brainEven = () => {
  const gameQuestion = `Answer "yes" if the number is even, otherwise answer "no"`
  let questions = []
  let answers = []
  for (let i = 0; i < 3; i += 1) {
    questions[i] = randomNumberFromRange(100)
    const boolRigthAnswer = isEven(questions[i])
    answers[i] = boolRigthAnswer === true ? 'yes' : 'no'
  }

  gameEngine (gameQuestion, questions, answers)
}

export { brainEven }
