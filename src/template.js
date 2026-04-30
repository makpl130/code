import { getAnswer, sendMessage } from '../src/interact.js'

const gameEngine = (question, answer) => {
  let gameResult = 'win'
  for (let i = 0; i < 3; i += 1) {
    sendMessage(`Question: ${question[i]}`)
    const userAnswer = getAnswer(`Your answer: `).toString()
    if (answer[i].toString() !== userAnswer) {
      sendMessage(`${userAnswer} is wrong answer ;(. Correct answer was ${answer[i]}`)
      gameResult = 'fail'
      break
    };
    sendMessage('Correct!')
  }

  return gameResult
}

export { gameEngine }
