////////// declarando la primer clase
export{};

class Listado{

    private nombreAlumno:string;

    constructor(pNombreAlumno:string){
        this.nombreAlumno = pNombreAlumno;
    }

    llamarNombreAlumno():string{
        return this.nombreAlumno;
    }
}

/////////// declaro la segunda clase

class Nota{
    private notaAlumno:number;

    constructor(pNotaAlumno:number){
        this.notaAlumno=pNotaAlumno;
    }
    // funcion

    llamarNotaAlumno():boolean{
        if (this.notaAlumno >= 7 )
        return true;
        else (this.notaAlumno <=6)
        return false;    
    }
}

///////// declaramos la tercer clase + integracion de las 2 clases

class SistemaEducativo{
            private nombreMaestro:string;
            private matricular:boolean;
            private contratar:boolean;
            private expulsar:boolean;
            private despedir:boolean;
            private listado:Listado;
            private nota:Nota;

            constructor(pNombreMaestro:string, pMatricular:boolean, pContratar:boolean, pExpulsar:boolean, pDespedir:boolean, pListado:Listado, pNota:Nota){

                this.nombreMaestro=pNombreMaestro;
                this.matricular=pMatricular;
                this.contratar=pContratar;
                this.expulsar=pExpulsar;
                this.despedir=pDespedir;
                this.listado=pListado;
                this.nota=pNota;
            }

}


let alumno1= new Listado ('Javier Chavarria');
let alumno2 = new Listado ('Erika Gramuglia');
let alumno3= new Listado ('Emiliano Gonzalez');

let listadoAlumno:Listado[] = [alumno1 , alumno2, alumno3];
    
console.log(listadoAlumno);

// segunda consulta ver nota del alumno

