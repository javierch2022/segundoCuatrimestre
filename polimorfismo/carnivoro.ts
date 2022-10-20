import { Mamifero } from "./mamiferos";

class Carnivoro extends Mamifero{
        private sangre:string;
// clase  y contructor//
    constructor(nombre:string, especie:string, velocidadDesplazamiento:number, alimentacion:string, sangre:string){
        super (nombre, especie,velocidadDesplazamiento,alimentacion);
        this.sangre=sangre;
    }

 // funciones publicas /////////////   
 public getDesplazamiento():number{
    return this.velocidadDesplazamiento;
}

    public setDesplazamiento(VelocidadDesplazamiento:number):void{
        this.velocidadDesplazamiento=VelocidadDesplazamiento + 40;
    }
    public setAlimentacion(alimentacion:string):void{
        this.alimentacion=" Carnes: " + alimentacion;
    }
}
/// exportacion de la clase
export default Carnivoro;



let perro = new Carnivoro('emi', 'carnivoro', 1, "solido", "roja");

console.log(perro.getDesplazamiento());
