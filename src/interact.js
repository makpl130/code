import readlineSync from 'readline-sync'

const getAnswer = (question) => {
  const userAnswer = readlineSync.question(`${question} `)
  return userAnswer
}

const sendMessage = (message) => {
  console.log(`${message}`)
}

export { getAnswer, sendMessage }
