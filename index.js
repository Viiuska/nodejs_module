/*
const person = require('./person');
console.log(person)

const Person = require('./person');

const person1 = new Person("Pedro Pascal", 47);

person1.greeting();

*/

const Logger = require('./logger');

const logger = new Logger();

logger.on('message', data => console.log('Called Listener: ', data));

logger.log("Hello world")

