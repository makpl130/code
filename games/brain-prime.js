#!/usr/bin/env node
import { welcome } from '../src/welcome.js'
import { getUserName, helloUser } from '../src/cli.js'
import { getAnswer, sendMessage } from '../src/interact.js'
import { randomNumberFromRange, isPrime } from '../src/math.js'
import { checkGameResult, userToBoolAnswer } from '../src/logic.js'

const brainPrime = () => {
  welcome()
  const userName = getUserName()
  helloUser(userName)
  sendMessage(`Answer "yes" if given number is prime. Otherwise answer "no".`)

  let gameResult = 'win'
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = randomNumberFromRange(100)
    const boolRigthAnswer = isPrime(randomNumber)
    const stringAnswer = boolRigthAnswer === true ? 'yes' : 'no'
    sendMessage(`Question: ${randomNumber}`)
    const userAnswer = getAnswer(`Your answer: `)
    if (userAnswer !== 'yes' && userAnswer !== 'no') {
      gameResult = 'fail'
      break
    };

    if (boolRigthAnswer !== userToBoolAnswer(userAnswer)) {
      sendMessage(`${userAnswer} is wrong answer ;(. Correct answer was ${stringAnswer}`)
      gameResult = 'fail'
      break
    };
    sendMessage('Correct!')
  };

  checkGameResult(gameResult, userName)
}

export default brainPrime
