export class SeleccionDeFutbol {  //la clase seleccionDeFutbol compone a las clases anteriores
   
    private nombreSeleccion: string;
  
    constructor(nombreSeleccion:string){
        this.nombreSeleccion=nombreSeleccion;
    }
        public getNombreSeleccion():string{
            return this.nombreSeleccion;
        }
        public setNombreSeleccion(nombreSeleccion:string):void{
            this.nombreSeleccion=nombreSeleccion;
        }
 }