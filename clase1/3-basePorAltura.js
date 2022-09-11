// ejercicio 3  area de un triangulo

let readlineSync = require('readline-sync');

console.log('===============================');
console.log('Calculo de area de un Triangulo');
console.log('===============================');
console.log('');

function calcular(a,b){
    calcular = a*b;
    return calcular
}

let base = readlineSync.questionInt("Ingrese el valor de la base: ");
let altura = readlineSync.questionInt("Ingrese el valor de la altura: ");
let areaTriangulo = calcular(base, altura);

console.log("El Area del triangulo es  = "+ areaTriangulo);

//