class Auto {

    private marca: string; // chevrolet
    private modelo: string; // agile
    private tipo: string; // naftero
    private color: string; // blanco
    private anio: number; // 2022  
    private condicion: boolean; //usado o nuevo si o no
    private motor:number;

    constructor(pMarca: string, pModelo: string, pTipo: string, pColor:string, pAnio: number, pCondicion: boolean, pMotor:number) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.tipo = pTipo;
        this.color= pColor;
        this.anio = pAnio;
        this.condicion = pCondicion;
        this.motor=pMotor;
    }

    //   funciones
    llamarMarca(): String {
        return this.marca;
    }
    llamarModelo(): String {
        return this.modelo;
    }
    llamarTipo(): String {
        return this.tipo;
    }
    llamarColor():string{
        return this.color;
    }
    llamarAnio(): Number {
        return this.anio;
    }
    
}

class RegistroAutomotor{

    private nombreSede:string;
    private provincia:string;
    private ciudad:string;


//funciones (agregar,borrar, editar , buscar)



}


let autoUno = new Auto("Chevrolet", "Cruze", "naftero", "Negro", 2022, true, 3311);
let autoDos = new Auto("Audi", "A5 cc", "naftero", "Negro", 2020, false, 3131);
let autoTres = new Auto("Fiat", "Argo", "naftero", "Rojo", 2021, false, 46465);
let autoCuatro = new Auto("Toyota", "Corolla", "naftero", "Blanco", 2022, true, 6417);




console.log("========== CONSECIONARIA EMI ===============");
console.log("          Los autos diponibles              ");
console.log("============================================");
console.log("1: ", autoUno);
console.log("2: ", autoDos);
console.log("3: ", autoTres);
console.log("4: ", autoCuatro);