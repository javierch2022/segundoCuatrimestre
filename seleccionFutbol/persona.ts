export class Persona{
    protected nombre:string;
    protected apellido:string;
  
    constructor (nombre:string, apellido:string){
        this.nombre=nombre;
        this.apellido=apellido;
    }
    getNombre ():string{
        return this.nombre;
    }
    setNombre(nombre:string):void{
        this.nombre=nombre;
    }getApellido():string{
        return this.apellido;
    }
    setApellido(apellido:string):void{
        this.apellido=apellido;
    }
}