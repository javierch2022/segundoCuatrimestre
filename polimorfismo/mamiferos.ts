// exporto la clase y sus atributos que necesito
export  class Mamifero {
    protected nombre:string;
    protected especie:string;
    protected velocidadDesplazamiento:number;
    protected alimentacion:string;

    constructor (nombre:string, especie:string, velocidadDesplazamiento:number, alimentacion:string){
       this.nombre = nombre;
       this.especie = especie;
       this.velocidadDesplazamiento = velocidadDesplazamiento;
       this.alimentacion = alimentacion;
    }

    //////////// funciones /////////////
public getNombre():string{
    return this.nombre;
}
public setNombre(nombre:string):void{
    this.nombre=nombre;
}
public getEspecie():string{
    return this.especie;
}
public setEspecie(especie:string):void{
    this.especie=especie;
}
public getDesplazamiento():number{
    return this.velocidadDesplazamiento;
}
public setDesplazamiento(velocidadDesplazamiento:number):void{
    this.velocidadDesplazamiento = velocidadDesplazamiento + 40;
}
public getAlimentacion():string{
    return this.alimentacion;
}
public setAlimentacion(alimentacion:string):void{
    this.alimentacion="moluscos " + alimentacion;
}
}