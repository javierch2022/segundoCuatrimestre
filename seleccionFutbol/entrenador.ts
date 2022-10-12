import { Persona } from "./persona";

export class Entrenador extends Persona{
        protected nacionalidad:string;

        constructor (nombreEntrenador:string, apellidoEntrenador:string, nacionalidad:string ){
            super(nombreEntrenador,apellidoEntrenador);
            this.nacionalidad=nacionalidad;
           
        }
        public getNacionalidad():string{
            return this.nacionalidad;
        } 
        public setNacionalidad(nacionalidad:string):void{
            this.nacionalidad=nacionalidad;
        }
}
// Prueba de código
/*
let entrenador1: Entrenador = new Entrenador ("Sergio", "Alvarez","argentino");
let entregador2: Entrenador = new Entrenador ("Mateo", "Gonzalez", "sueco");
console.lo