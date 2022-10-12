// aqui vamos a ver el ejemplo para capturar errores
// se usa para via de escape para el usuario

function sumarValores(valores:number[]):number{


    if(valores.length == 0){
     throw new Error('No podemos sumar los valores'); // esta captura es para el back para mi
    }

    let sumaTotal= 0;

    for(let i:number = 0; i< valores.lenght;i++){
        sumaTotal= sumaTotal + valores[i];
    }
    if(sumaTotal>20){
        throw new Error ('la suma supera el numero 20');
    }

    return sumaTotal;
}   
//comienzo del main
let valores:number[]=[4,5,6,7,8] ;
let resultado:number;



// aqui ejecucion del programa y captura del error

try{
    resultado=sumarValores(valores);
    console.log(resultado);
}catch(error){

    console.log("el arreglo que paso el usario esta vacio");
}