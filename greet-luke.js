const chalk = require('chalk');
const figlet = require('figlet');




const greet =  require('./greet');

const styledMessage = chalk.bgBlack.green(greet('Luke'));
const figletMessage = figlet.textSync('Hello Luke');


console.log('chalk message : ' + styledMessage);
console.log('==============');
console.log('figlet message : '+ figletMessage);

