#!/usr/bin/env node
import { welcome } from '../src/welcome.js'
import { getUserName, helloUser } from '../src/cli.js'
import { getAnswer, sendMessage } from '../src/interact.js'
import { randomNumberFromRange } from '../src/math.js'
import { checkGameResult } from '../src/logic.js'

const brainProgression = () => {
  welcome()
  const userName = getUserName()
  helloUser(userName)
  sendMessage(`What number is missing in the progression?`)

  let gameResult = 'win'
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

    sendMessage(`Question: ${question}`)
    const userAnswer = Number(getAnswer(`Your answer: `))

    if (userAnswer !== secretElement) {
      sendMessage(`${userAnswer} is wrong answer ;(. Correct answer was ${secretElement}`)
      gameResult = 'fail'
      break
    };

    sendMessage('Correct!')
  };

  checkGameResult(gameResult, userName)
}

export { brainProgression }
