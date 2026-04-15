#!/usr/bin/env node
import welcome from '../src/welcome.js'
import { getUserName, helloUser }  from '../src/cli.js';

welcome();
const userName=getUserName();
helloUser(userName);

