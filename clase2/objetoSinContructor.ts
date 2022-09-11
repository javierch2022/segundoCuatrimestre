// clase 2 objetos 

class Televisor1{
    // variables
    public estaPrendido:boolean;
    public volumenActual:number;
    public canalActual:number;
    public modelo:number;
    public marca:string;


    //funcion prender apagar
    prenderApagar():void{
        if(this.estaPrendido === true){
            this.estaPrendido  = false;
        }else{
            this.estaPrendido = true;
        }
    }
    //funcion obtener numero de volumen
    obtenerVolumen():number{
        return this.volumenActual;
    }
    //funcion subir el volumen actual
    subirVolumen():void{
    this.volumenActual = this.volumenActual++;
    }
}

//instancias de objetos

let primerTelevisor1 = new Televisor1();
primerTelevisor1.obtenerVolumen(3);

// comando para transpilar el archivo.ts a archivo.js aplicar el siguiente comando
// tsc index.ts
// ahora ejecuto el nuevo index.js que se modifico