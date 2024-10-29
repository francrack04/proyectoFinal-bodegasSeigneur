let prompt = require('prompt-sync')();
//
// get input from the user 
//
let edad = prompt('Ingrese su edad: ');
console.log('El año que viene cumplira: ',parseInt(edad)+1)
console.log(`El año pasado cumplio ${parseInt(edad)-1} años`) 