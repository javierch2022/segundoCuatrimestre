// suma y promedio de auto de carrera
let readlineSync = require('readline-sync');

let vueltas = [];

console.log("===============================");
console.log("        Autos de carreras      ");
console.log("===============================");

// Aqui realizamos la suma de la array
for (let i = 1 ; i <5; i++) {
    vueltas[i] = readlineSync.questionInt("El tiempo de la vuelta N " + [i] +" :");
};
console.log("--------------------------------------");

// usamos el methodo .reduce para la suma
const sumaVueltas = vueltas.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
);
console.log("El valor total de las vueltas es : "+ sumaVueltas);
console.log("--------------------------------------");

// Promedio
const promedioVueltas = sumaVueltas / 4 ;
console.log("El Promedio de tiempo es = "+ promedioVueltas);
console.log("--------------------------------------");






