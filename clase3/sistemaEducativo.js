"use strict";
exports.__esModule = true;
var Listado = /** @class */ (function () {
    function Listado(pNombreAlumno) {
        this.nombreAlumno = pNombreAlumno;
    }
    Listado.prototype.llamarNombreAlumno = function () {
        return this.nombreAlumno;
    };
    return Listado;
}());
/////////// declaro la segunda clase
var Nota = /** @class */ (function () {
    function Nota(pNotaAlumno) {
        this.notaAlumno = pNotaAlumno;
    }
    // funcion
    Nota.prototype.llamarNotaAlumno = function () {
        if (this.notaAlumno >= 7)
            return true;
        else
            (this.notaAlumno <= 6);
        return false;
    };
    return Nota;
}());
///////// declaramos la tercer clase + integracion de las 2 clases
var SistemaEducativo = /** @class */ (function () {
    function SistemaEducativo(pNombreMaestro, pMatricular, pContratar, pExpulsar, pDespedir, pListado, pNota) {
        this.nombreMaestro = pNombreMaestro;
        this.matricular = pMatricular;
        this.contratar = pContratar;
        this.expulsar = pExpulsar;
        this.despedir = pDespedir;
        this.listado = pListado;
        this.nota = pNota;
    }
    return SistemaEducativo;
}());
var alumno1 = new Listado('Javier Chavarria');
var alumno2 = new Listado('Erika Gramuglia');
var alumno3 = new Listado('Emiliano Gonzalez');
var listadoAlumno = [alumno1, alumno2, alumno3];
console.log(listadoAlumno);
// segunda consulta ver nota del alumno
