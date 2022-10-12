// importo a mamifero para poder usar herencia 
import { Mamifero } from "./mamiferos";

// creo la clase  y heredo desde mamifero
class Omnivoro extends Mamifero{

    constructor(nombre:string, especie:string, VelocidadDesplazamiento:number,alimentacion:string){
        super (nombre, especie, VelocidadDesplazamiento, alimentacion);
    }

    // funciones publicas
    public setDesplazamiento(VelocidadDesplazamiento:number):void{
        this.velocidadDesplazamiento=VelocidadDesplazamiento + 40;
    }
    public setAlimentacion(alimentacion:string):void{
        this.alimentacion=" Carnes y Vegetales: " + alimentacion;
    }
}

// exporto la clase creada
export default Omnivoro;