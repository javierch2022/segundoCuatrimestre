// clase 2 objetos 

class Televisor{
    // variables
    public estaPrendido:boolean;
    public volumenActual:number;
    public canalActual:number;
    public modelo:number;
    public marca:string;

    //constructor de objeto, sirve para diferencias instancias 

    constructor(parametroPrendido:boolean, parametroVolumen:number, parametroCanal:number, parametroModelo:number, parametroMarca:string){
        //aqui van las variables publicas + = + variables del constructor
        this.estaPrendido = parametroPrendido;
        this.volumenActual = parametroVolumen;
        this.canalActual = parametroCanal;
        this.modelo = parametroModelo;
        this.marca = parametroMarca;
    }

    //funcion prender apagar
    prenderApagar():void{
        if(this.estaPrendido === true){
            this.estaPrendido  = false;
        }else{
            this.estaPrendido = true;
        }
    }
    //funcion obtener numero de volumen
    obtenerVolum():number{
        return this.volumenActual;
    }
    //funcion subir el volumen actual
    subirVolumen():void{
    this.volumenActual = this.volumenActual++;
    }

}

//instancias de objetos

let primerTelevisor = new Televisor(true,45,67,2020,"noblex");
let segundoTelevisor = new Televisor(true,60,15,2022,"sony");

console.log(primerTelevisor);
console.log(segundoTelevisor);

// otra forma sin constructor
// let primerTelevisor = new Televisor();
// primerTelevisor.(llamo a la funcion)=>(agrego el atrivuto ejemplo numero o string);