import { Mamifero } from "./mamiferos";

class Carnivoro extends Mamifero{
// clase  y contructor//
    constructor(nombre:string, especie:string, velocidadDesplazamiento:number, alimentacion:string){
        super (nombre, especie,velocidadDesplazamiento,alimentacion);
    }

 // funciones publicas /////////////   
    public setDesplazamiento(VelocidadDesplazamiento:number):void{
        this.velocidadDesplazamiento=VelocidadDesplazamiento + 40;
    }
    public setAlimentacion(alimentacion:string):void{
        this.alimentacion=" Carnes: " + alimentacion;
    }
}
/// exportacion de la clase
export default Carnivoro;