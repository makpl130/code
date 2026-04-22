#!/usr/bin/env node
import { welcome } from '../src/welcome.js'
import { getUserName, helloUser } from '../src/cli.js'
import { getAnswer, sendMessage } from '../src/interact.js'
import { findGCD, randomNumberFromRange } from '../src/math.js'
import { checkGameResult } from '../src/logic.js'

const brainGCD = () => {
  welcome()
  const userName = getUserName()
  helloUser(userName)
  sendMessage(`Find the greatest common divisor of given numbers.`)

  let gameResult = 'win'
  for (let i = 0; i < 3; i += 1) {
    let randomNumber1
    let randomNumber2
    while (randomNumber1 === randomNumber2) {
      randomNumber1 = (randomNumberFromRange(78) + 1)
      randomNumber2 = Math.floor((randomNumber1 * randomNumberFromRange(3) / 3
        + randomNumber1 * randomNumberFromRange(7) / 4))
    }
    const question = `${randomNumber1} ${randomNumber2}`
    const rigthAnswer = findGCD(randomNumber1, randomNumber2)

    sendMessage(`Question: ${question}`)
    const userAnswer = Number(getAnswer(`Your answer: `))

    if (userAnswer !== rigthAnswer) {
      sendMessage(`${userAnswer} is wrong answer ;(. Correct answer was ${rigthAnswer}`)
      gameResult = 'fail'
      break
    };

    sendMessage('Correct!')
  };

  checkGameResult(gameResult, userName)
}

export { brainGCD }
