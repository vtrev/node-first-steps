const chalk = require('chalk');

const greet =  require('./greet');

const styledMessage = chalk.bgBlack.green(greet('Luke'));
console.log(styledMessage);
