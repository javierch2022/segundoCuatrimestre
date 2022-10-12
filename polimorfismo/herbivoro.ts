// traigo a mamiferos para usar los atributos
import { Mamifero } from "./mamiferos";


///Creo la clase herbivoro + herencia de mamifero
class Herbivoro extends Mamifero{

    constructor(nombre:string, especie:string, VelocidadDesplazamiento:number,alimentacion:string){
        super (nombre, especie, VelocidadDesplazamiento, alimentacion);
    }

// funciones publicas    
    public setDesplazamiento(VelocidadDesplazamiento:number):void{
        this.velocidadDesplazamiento=VelocidadDesplazamiento + 60;
    }
    public setAlimentacion(alimentacion:string):void{
        this.alimentacion=" Vegetales: " + alimentacion;
    }
}

// exporto la clase herbivoro para ser utilizada
export default Herbivoro;