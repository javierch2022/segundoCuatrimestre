// ejercicio 2
let readlineSync = require('readline-sync');
let mensajeUsuario = [];

for (let i=0 ; i<3; i++){
    mensajeUsuario[i] = readlineSync.question("escribe un mensaje:");
};
for (let i=0; i<mensajeUsuario.length; i++){
    console.log("escribió el siguiente mensaje:" +mensajeUsuario[i]);
};