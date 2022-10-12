//import { Persona } from "./persona";
import { Futbolista } from "./futbolista";
import { Masajista } from "./masajista"; 
import { SeleccionDeFutbol } from "./seleccionDeFutbol";
import { Entrenador } from "./entrenador";

let futbolista1 : Futbolista = new Futbolista ("Lionel", "Messi",true,10); 

let futbolista2 : Futbolista = new Futbolista ("Mario", "Rojo",false,2);
let futbolista3 : Futbolista = new Futbolista ("Julio", "Aras",false,20);

let entrenadorTitular: Entrenador = new Entrenador ("Sergio", "Alvarez","argentino");
let entrenadorSuplente: Entrenador = new Entrenador ("Mateo", "Gonzalez", "sueco");

let masajista1 : Masajista = new Masajista ("Juan", "Benitez",false); 
let masajista2 : Masajista = new Masajista ("José", "Juarez",false); 

 //let listadoFutbolista1 = [futbolista1,futbolista2];
 //let listadoEntrenador1 = [entrenadorTitular];
 //let listadoMasajista1  = [masajista1];

 let seleccionDeFutbol1 : SeleccionDeFutbol = new SeleccionDeFutbol("Argentina");
 
seleccionDeFutbol1.setNombreSeleccion("Brasil"); //seteo del nombre de la selección
futbolista1.setCamiseta(9);
futbolista2.setTitular(true);
futbolista3.getApellido();
masajista1.realizarMasaje(true);
masajista2.getApellido();
entrenadorSuplente.setNacionalidad("griego");
entrenadorTitular.getNombre();
