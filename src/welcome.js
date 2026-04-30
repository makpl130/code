import { getUserName, helloUser } from '../src/cli.js'

const welcome = () => {
  console.log(`Welcome to the Brain Games!`)
  const userName = getUserName()
  helloUser(userName)
  return userName
}

export { welcome }
