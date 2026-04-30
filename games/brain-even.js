import { welcome } from '../src/welcome.js'
import { sendMessage } from '../src/interact.js'
import { randomNumberFromRange, isEven } from '../src/math.js'
import { checkGameResult } from '../src/logic.js'
import { gameEngine } from '../src/template.js'

const brainEven = () => {
  const userName = welcome()
  sendMessage(`Answer "yes" if the number is even, otherwise answer "no"`)
  let question = []
  let answer = []
  for (let i = 0; i < 3; i += 1) {
    question[i] = randomNumberFromRange(100)
    const boolRigthAnswer = isEven(question[i])
    answer[i] = boolRigthAnswer === true ? 'yes' : 'no'
  }

  const gameResult = gameEngine (question, answer)

  checkGameResult(gameResult, userName)
}

export { brainEven }
