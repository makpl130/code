import readlineSync from 'readline-sync';

const getUserName = (message) => {
    const userName = readlineSync.question(`${message} `);
    console.log(`Hello, ${userName}!`);
    return userName;
}

export {getUserName};