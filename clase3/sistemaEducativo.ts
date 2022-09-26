
/////////////clase alumno
class Alumno{
/// declaro mis variables o atributos
    private nombre:string;
    private apellido:string;
    private notaMatematica:number;
    private notaIngles:number;
//// declaro mi constructor
    constructor (pNombre:string, pApellido:string, pNotaMatematicas:number, pNotaIngles:number){
        this.nombre=pNombre;
        this.apellido=pApellido;
        this.notaMatematica=pNotaMatematicas;
        this.notaIngles=pNotaIngles;
    }
//////////funcion
    public getNombre():string{
        return this.nombre;
    }
    public setNombre(pNom):string{
        return this.nombre=pNom;
    }
    public getApellido():string{
        return this.apellido;
    }
    public setNotaMatematica(pNota:number):void{
        this.notaMatematica= pNota;
    }
    public setNotaIngle(pNota:number):void{
        this.notaMatematica= pNota;
    }
    public getCalificacion():string{
        if(this.notaMatematica > 7){
            return " Aprobado"
        }else{
            return "Desaprobado"
        }
    }
    public getCalificacionI():string{
        if(this.notaMatematica > 7){
            return " Aprobado"
        }else{
            return "Desaprobado"
        }
    }

}    

/////////////// clase profesor  
class Profesor{
///// declaro mis variables o atributos
    private nombre:string;
    private apellido:string;
    private listadoDeAlumno:Alumno[];
///// declaro mi constructor
    constructor(pNombre:string, pApellido:string,pListadoAl:Alumno[] ){
        this.nombre=pNombre;
        this.apellido=pApellido;
        this.listadoDeAlumno= pListadoAl;
    }
///////// funciones 
    public getNombre():string{
        return this.nombre;
    }
    public getApellido():string{
        return this.apellido;
    }
    
}
///////////// clase escuela
class Escuela {
    private nombreEscuela:string;
    private listadoAlumnos:Alumno[];
    private ListadoProfesores:Profesor[];
////// declaro mi contructor
    constructor(pNombre:string, pListadoAlumno:Alumno[],pListadoProfesores:Profesor[]){
        this.nombreEscuela=pNombre;
        this.listadoAlumnos=pListadoAlumno;
        this.ListadoProfesores=pListadoProfesores;
    }
//////// funciones 
    public getNombreEscuela():string{
        return this.nombreEscuela;
    }
    public setNombreEscuela(pNom):void{
        this.nombreEscuela=pNom;
    }
    public contrataProfesor(pProfesor:Profesor):void{
        this.ListadoProfesores.push(pProfesor);
        console.log("profesor Contratado")
    }
    public despedirProfesor(pProfesor:Profesor):void{
        for (let i:number=0; i<this.ListadoProfesores.length; i++){
            if(pProfesor.getApellido()===this.ListadoProfesores[i].getApellido()){
                this.ListadoProfesores.splice(i,1);
                console.log("profesor Despedido" + pProfesor.getApellido())
            }else {
                console.log("No se Encontro el profesor"+ pProfesor.getApellido())
            }
        }
    }
    public matricularAlumno(pAlumno:Alumno):void{
        this.listadoAlumnos.push(pAlumno);
    }
    public removerAlumno(pAlumno:Alumno):void{
        for (let i:number=0; i<this.listadoAlumnos.length; i++){
            if(pAlumno.getApellido()===this.listadoAlumnos[i].getApellido()){
                this.listadoAlumnos.splice(i,1);
                console.log("Alumno Despedido" + pAlumno.getApellido())
            }
    }
    }
}
/////// variables 

let alumnoA = new Alumno ("javier", "Chavarria", 10, 9);
let alumnoB = new Alumno ("mariano", "Paz", 10, 9);
let alumnoC = new Alumno ("emiliano", "Gonzalez", 10, 9);

let listadoAl: Alumno[] = [alumnoA, alumnoB, alumnoC];

let docenteM = new Profesor("Emilce", "gonzalez", listadoAl);
let docenteI = new Profesor("mariana", "Guzman", listadoAl);

let listadoDocentes:Profesor[] = [docenteM, docenteI];

let esculaPrimaria:Escuela = new Escuela ("Escuela N5138", listadoAl,listadoDocentes);

//escuelaPrimaria.despedirProfesor(docenteM);
