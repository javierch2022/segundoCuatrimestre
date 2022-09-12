// plantear una clase auto 
//atriubuto contructor variables internas y metodos
// crear un programa traducido a js.

// celular
class Celular{
    //variables
    private marca:string;
    private modelo:string;
    private precio:number;
    private estadoNuevo:boolean;

    constructor(pMarca:string, pModelo:string, pPrecio:number, pEstado:boolean){
        //aqui van las variables publicas + = + variables del constructor
        this.marca = pMarca;
        this.modelo = pModelo;
        this.precio = pPrecio;
        this.estadoNuevo = pEstado;
    }

    condicion():void{
        if(this.estadoNuevo === true){
            this.estadoNuevo  = false;
        console.log("Nuevo");    
        }else{
            this.estadoNuevo = true;
        console.log("Usado");    
        }
    }


}

let celularDubai = new Celular("motorola", "Epro+", 200.000, true );
let celularHawaii = new Celular("motorola", "g620", 50.000, false );
let celularFrontier = new Celular("motorola", "g++", 150.000, true );

console.log("El producto 1 es :",celularDubai.condicion);
console.log("El producto 2 es :",celularHawaii.condicion);
console.log("El producto 3 es :",celularFrontier.condicion);

