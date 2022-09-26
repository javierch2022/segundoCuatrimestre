// clase libro ... // insertar / consultar/ modificar/ eliminar 
class Libro{

    private nombre:string;
    private cantidadPagina:number;
    private autor:string;
    private editorial:string;
    private lenguaje:string;
    private fecha:number;
 /////////////////////////////////////
    constructor(pNombre:string, pCantidadPagina:number, pAutor:string, pEditorial:string, pLenguaje:string, pFecha:number){

        this.nombre = pNombre;
        this.cantidadPagina = pCantidadPagina;
        this.autor=pAutor;
        this.editorial=pEditorial;
        this.lenguaje=pLenguaje;
        this.fecha=pFecha;
    
    }   
//////////////// function get///////////


    public getNombre ():string{
        return this.nombre;
    }
    public getPagina():number{
        return this.cantidadPagina;
    }
    public getAutor():string{
        return this.autor;
    }
    public getEditorial():string{
        return this.editorial;
    }
    public getLenguaje():string{
        return this.lenguaje;
    }
    public getFecha():number{
        return this.fecha;
    }
///////////// funcion set //////////////

    public setNombre (pNom):string{
        console.log("Nombre Cargado" + this.nombre);
        return this.nombre=pNom;
    }
    public setPagina(pPag):number{
        console.log("PAgina Cargadoa" + this.cantidadPagina);
        return this.cantidadPagina=pPag;
    }
    public setAutor(pAut):string{
        console.log("Autor Cargado" + this.autor);
        return this.autor=pAut;
    }
    public setEditorial(pEdi):string{
        console.log("Editorial Cargada" + this.editorial);
        return this.editorial=pEdi;
    }
    public setLenguaje(pLen):string{
        console.log("Lenguaje Cargado" + this.lenguaje);
        return this.lenguaje=pLen;
    }
    public setFecha(pFec):number{
        console.log("Fecha Cargada" + this.fecha);
        return this.fecha=pFec;
    }    

    

}


export default Libro;


let libro1 = new Libro ("las 15 leyes indispensables del crecimiento", 288, "John Maxwel", "little, Brown & Company", "Spanish", 2013 );
let libro2 = new Libro ("Sanar sin metodos", 400, "Bill Johnson", "Peniel", "Spanish", 2012 );
let libro3 = new Libro ("Inquebrantables", 224, "Daniel Habif", "Harpercollins Leadership", "Spanish", 2020 );


let stock =[libro1, libro2, libro3];
console.log(stock);





//console.log(libro1)