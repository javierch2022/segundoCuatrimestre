// plantear una clase auto 
//atriubuto contructor variables internas y metodos
// crear un programa traducido a js.


class Auto {

    public marca: string; // chevrolet
    public modelo: string; // agile
    public tipo: string; // naftero
    public color: string; // blanco
    public anio: number; // 2022  
    public condicion: boolean; //usado o nuevo si o no

    constructor(pMarca: string, pModelo: string, pTipo: string, pColor:string, pAnio: number, pCondicion: boolean) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.tipo = pTipo;
        this.color= pColor;
        this.anio = pAnio;
        this.condicion = pCondicion;
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
    llamarAnio(): Number {
        return this.anio;
    }
    
    llamarCondicion(): boolean {
        return this.condicion;
    }  
    
}

let autoUno = new Auto("Chevrolet", "Cruze", "naftero", "Negro", 2022, true);
let autoDos = new Auto("Audi", "A5 cc", "naftero", "Negro", 2020, false);
let autoTres = new Auto("Fiat", "Argo", "naftero", "Rojo", 2021, false);
let autoCuatro = new Auto("Toyota", "Corolla", "naftero", "Blanco", 2022, true);




console.log("========== CONSECIONARIA EMI ===============");
console.log("          Los autos diponibles              ");
console.log("============================================");
console.log("1: ", autoUno);
console.log("2: ", autoDos);
console.log("3: ", autoTres);
console.log("4: ", autoCuatro);