#!/usr/bin/env node
import welcome from '../src/welcome.js'
import { getUserName }  from '../src/cli.js';

console.log(welcome('Welcome to the Brain Games!'));
console.log(getUserName('May I have your name?'));
//const userName = getUserName('May I have your name?');
//console.log(userName)
