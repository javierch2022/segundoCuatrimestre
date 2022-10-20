"use strict";
exports.__esModule = true;
exports.Curso = void 0;
var Curso = /** @class */ (function () {
    function Curso(pNombre, pModalidad, pMinimoNotaCurso) {
        this.nombre = pNombre;
        this.modalidad = pModalidad;
        this.minimoNotaCurso = pMinimoNotaCurso;
    }
    Curso.prototype.getNombre = function () {
        return this.nombre;
    };
    Curso.prototype.getModalidad = function () {
        return this.modalidad;
    };
    Curso.prototype.getNotaMinimaCurso = function () {
        return this.minimoNotaCurso;
    };
    Curso.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Curso.prototype.setModalidad = function (pModalidad) {
        this.modalidad = pModalidad;
    };
    Curso.prototype.setNotaMinimaCurso = function (pMinimoNotaCurso) {
        this.minimoNotaCurso = pMinimoNotaCurso;
    };
    return Curso;
}());
exports.Curso = Curso;
