import { getAnswer, sendMessage } from '../src/interact.js'
import { userWelcomeAndGetUsername } from './welcome.js'

const gameEngine = (gameQuestion, gameData) => {
  const userName = userWelcomeAndGetUsername()
  console.log(gameQuestion)
  const questions = gameData.map(item => item[0])
  const answers = gameData.map(item => item[1])
  let gameResult = 'win'
  for (let i = 0; i < 3; i += 1) {
    sendMessage(`Question: ${questions[i]}`)
    const userAnswer = getAnswer(`Your answer: `).toString()
    if (answers[i].toString() !== userAnswer) {
      sendMessage(`${userAnswer} is wrong answer ;(. Correct answer was ${answers[i]}`)
      gameResult = 'fail'
      break
    };
    sendMessage('Correct!')
  }

  if (gameResult === 'win') {
    sendMessage(`Congratulations, ${userName}!`)
  }
  else {
    sendMessage(`Let's try again, ${userName}!`)
  }
}

export { gameEngine }
