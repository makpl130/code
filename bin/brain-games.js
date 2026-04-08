#!/usr/bin/env node
import welcome from '../src/welcome.js'
import { getUserName }  from '../src/cli.js';

console.log(welcome('Welcome to the Brain Games!'));
const userName = getUserName('May I have your name?');