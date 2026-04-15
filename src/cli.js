import readlineSync from 'readline-sync';

const getUserName = () => {
    const userName = readlineSync.question('May I have your name? ');
    return userName;
}

const helloUser = (userName) => {
    console.log(`Hello, ${userName}!`);
}

export {getUserName, helloUser};