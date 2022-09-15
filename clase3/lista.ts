
class Lista{

    private materia:string;
    private nombreApellidoAlumno:string;
    private notaAlumno:number;
    
constructor(pMateria:string, pnombreApellidoAlumno:string, pnotaAlumno:number){
    
    this.materia = pMateria;
    this.nombreApellidoAlumno = pnombreApellidoAlumno;
    this.notaAlumno=pnotaAlumno;
}
// funciones

llamarMateria():string{
    return this.materia;
}
llamarAlumno():string{
    return this.nombreApellidoAlumno;
}
llamarNota():boolean{
    if (this.notaAlumno >= 7 )
    return true;
    else (this.notaAlumno <=7)
    return false;    
}

}

let verAlumno= new Lista("ingles", "javier Chavarria", 10);
let verAlumno1= new Lista("ingles", "javier Chavarria", 3); 


let notaJose= verAlumno.llamarNota();

if (notaJose = true){
    console.log(`Alumno ${verAlumno.llamarAlumno()} Aprobado`)
}else{console.log(`alumno ${verAlumno.llamarAlumno()}Desaprobado`)};

////////////////////////////////////////////////////////////////////////////////////////////////

class Editar{

}
