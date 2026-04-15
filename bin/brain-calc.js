#!/usr/bin/env node
import welcome from '../src/welcome.js'
import { getUserName, helloUser }  from '../src/cli.js';
import { getAnswer, sendMessage } from '../src/interact.js'
import { randomNumberFromRange } from '../src/math.js';
import { checkGameResult } from '../src/logic.js';


welcome();
const userName=getUserName();
helloUser(userName);
sendMessage(`What is the result of the expression?`)

let gameResult='win';
for (let i=0; i<3; i += 1) {
  const randomNumber1=randomNumberFromRange(21);
  const randomNumber2=randomNumberFromRange(21);
  const randomAction=randomNumberFromRange(3);
  let question;
  let rigthAnswer;
  switch (randomAction) {
    case 0:
        question=`${randomNumber1} + ${randomNumber2}`;
        rigthAnswer=randomNumber1 + randomNumber2;
        break;
    case 1:
        question=`${randomNumber1} - ${randomNumber2}`;
        rigthAnswer=randomNumber1 - randomNumber2;
        break;
    case 2:
        question=`${randomNumber1} * ${randomNumber2}`;
        rigthAnswer=randomNumber1 * randomNumber2;
        break;
  }

  sendMessage(`Question: ${question}`);
  const userAnswer=Number(getAnswer(`Your answer: `));

  if ( userAnswer !== rigthAnswer ) {
    sendMessage(`${userAnswer} is wrong answer ;(. Correct answer was ${rigthAnswer}`);
    gameResult='fail';
    break };

  sendMessage('Correct!');
};

checkGameResult(gameResult, userName);
