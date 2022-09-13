var Lista = /** @class */ (function () {
    function Lista(pMateria, pnombreApellidoAlumno, pnotaAlumno) {
        this.materia = pMateria;
        this.nombreApellidoAlumno = pnombreApellidoAlumno;
        this.notaAlumno = pnotaAlumno;
    }
    // funciones
    Lista.prototype.llamarMateria = function () {
        return this.materia;
    };
    Lista.prototype.llamarAlumno = function () {
        return this.nombreApellidoAlumno;
    };
    Lista.prototype.llamarNota = function () {
        if (this.notaAlumno >= 7)
            return true;
        else
            (this.notaAlumno <= 7);
        return false;
    };
    return Lista;
}());
var verAlumno = new Lista("ingles", "javier Chavarria", 10);
var verAlumno1 = new Lista("ingles", "javier Chavarria", 3);
var notaJose = verAlumno.llamarNota();
if (notaJose = true) {
    console.log("Alumno :" + verAlumno.llamarAlumno() + " Aprobado");
}
else {
    console.log("alumno :" + verAlumno.llamarAlumno() + " Desaprobado");
}
;
