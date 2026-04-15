import { sendMessage } from "./interact.js";

const checkGameResult = (gameResult, userName) => {
    if ( gameResult === 'win') {
    sendMessage(`Congratulations, ${userName}!`);
    } else {
        sendMessage(`Let's try again, ${userName}!`);
    }
}

const userToBoolAnswer = (userAnswer) => { 
  if ( userAnswer === 'yes' ) {const boolUserAnswer=true; return boolUserAnswer};
  if ( userAnswer === 'no' ) {const boolUserAnswer=false; return boolUserAnswer};
}

export {checkGameResult, userToBoolAnswer};