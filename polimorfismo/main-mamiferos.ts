// importo las clases {significa que esta exportada ciertos p de clase}  import solo importa toda la clase .ts
import { Mamifero } from "./mamiferos";
import  Herbivoro  from "./herbivoro";
import Carnivoro  from "./carnivoro";
import  Omnivoro  from "./omnivoro";



let mamiferos1: Mamifero = new Mamifero("Ballena","Cetáceo",20,"piedra");
console.log("***********************************************");
console.log("***********************************************");
console.log("Nombre:  " +mamiferos1.getNombre());
console.log("Especie: " +mamiferos1.getEspecie());
console.log("Velocidad de desplazamiento normal: " +mamiferos1.getDesplazamiento(), " km/h");
mamiferos1.setAlimentacion("krill");
console.log("Alimentación: " +mamiferos1.getAlimentacion());
mamiferos1.setDesplazamiento(0);
console.log("La velocidad máxima del mamifero "+mamiferos1.getNombre(), "es: " + mamiferos1.getDesplazamiento()," km/h");
console.log("***********************************************");
console.log("***********************************************");

let herbivoro1 : Herbivoro = new Herbivoro ("Gacela", "bóvidos", 15,"pasto");
console.log("***********************************************");
console.log("***********************************************");
console.log("Nombre:  " +herbivoro1.getNombre());
console.log("Especie: " +herbivoro1.getEspecie());
console.log("Velocidad de desplazamiento normal: " +herbivoro1.getDesplazamiento(), " km/h");
herbivoro1.setAlimentacion("pastizal");
console.log("Alimentación: " +herbivoro1.getAlimentacion());
herbivoro1.setDesplazamiento(7);
console.log("La velocidad máxima del Herbívoro "+herbivoro1.getNombre(), "es: " + herbivoro1.getDesplazamiento()," km/h");
console.log("***********************************************");
console.log("***********************************************");

let carnivoro1 : Carnivoro = new Carnivoro ("Leopardo", "Felino", 12,"cadáveres");
console.log("***********************************************");
console.log("***********************************************");
console.log("Nombre:  " +carnivoro1.getNombre());
console.log("Especie: " +carnivoro1.getEspecie());
console.log("Velocidad de desplazamiento normal: " +carnivoro1.getDesplazamiento(), " km/h");
carnivoro1.setAlimentacion("cadáveres frescos");
console.log("Alimentación: " +carnivoro1.getAlimentacion());
carnivoro1.setDesplazamiento(0);
console.log("La velocidad máxima del carnívoro "+carnivoro1.getNombre(), "es: " + carnivoro1.getDesplazamiento()," km/h");
console.log("***********************************************");
console.log("***********************************************");

let omnivoro1 : Omnivoro = new Omnivoro ("Hombre", "Humano", 1,"pollo");
console.log("***********************************************");
console.log("***********************************************");
console.log("Nombre:  " +omnivoro1.getNombre());
console.log("Especie: " +omnivoro1.getEspecie());
console.log("Velocidad de desplazamiento normal: " +omnivoro1.getDesplazamiento(), " km/h");
omnivoro1.setAlimentacion("Ave");
console.log("Alimentación: " +omnivoro1.getAlimentacion());
omnivoro1.setDesplazamiento(2);
console.log("La velocidad máxima del omnivoro "+omnivoro1.getNombre(), "es: " + omnivoro1.getDesplazamiento()," km/h");
console.log("***********************************************");
console.log("***********************************************");