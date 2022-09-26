/// herencia


//clase padre
class Persona {
    protected nombre: string;
    protected edad: number;
    protected obrasocial:boolean;

    public constructor(pNombre: string, pEdad: number, pObraSocial:boolean) {
        this.nombre = pNombre;
        this.edad = pEdad;
        this.obrasocial=pObraSocial;  
    }

    public getNombre():string{
        return this.nombre;
    }

    public getEdad():number{
        return this.edad;
    }

    public getObraSocial():boolean{
        return this.obrasocial;

    }
}


class Empleado extends Persona {

    private sueldo: number;
    public constructor(pNombre: string, pEdad: number, pObraSocial:boolean, pSueldo: number) {
        super("javier", 33, true);
        this.sueldo = pSueldo;
    }

    public setSueldo(pSueldo:number):void{
        this.sueldo=pSueldo;
    }
    
}   






let empleado1:Empleado = new Empleado("javier", 33, true, 500000);

console.log(empleado1);



    
