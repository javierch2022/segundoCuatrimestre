import { Persona } from "./persona";

export class Futbolista extends Persona {
        protected titular:boolean;
        protected camiseta: number;
        
        constructor (nombre:string, apellido:string, titular:boolean, camiseta:number){
        super (nombre,apellido);
        this.titular=titular;
        this.camiseta=camiseta;
       
           }
    
    public getCamiseta():number{
        return this.camiseta;
    }
    public setCamiseta(camiseta:number):void{
        this.camiseta=camiseta;
        console.log("Al jugador "+this.nombre,""+this.apellido,"se le cambia el num de camiseta por la num " +this.camiseta,);

    }
    public getTitular():boolean{
        return this.titular;
    }
    public setTitular(titular:boolean):void{
        this.titular=titular;
        if (titular==true){
            console.log("El jugador "+this.nombre,""+this.apellido, " es TITULAR");
        } else {
            console.log("El jugador "+this.nombre,""+this.apellido, " es SUPLENTE");
        }
    }
    
}
//Prueba de Funcionamiento

/*let futbolista1 : Futbolista = new Futbolista ("Juan", "Benitez",true,10); 
let futbolista2 : Futbolista = new Futbolista ("José", "Juarez",false,2); 
console.log("El jugador "+futbolista1.getNombre(),""+futbolista1.getApellido(), "tiene la camiseta num "+futbolista1.getCamiseta());
futbolista1.setCamiseta(9);
futbolista1.setTitular(true);
futbolista2.setTitular(false);
console.log(".......");
*/