"use strict";
exports.__esModule = true;
exports.Capacitacion = void 0;
var Capacitacion = /** @class */ (function () {
    function Capacitacion(pCurso) {
        this.curso = pCurso;
        this.notasCurso = [];
    }
    Capacitacion.prototype.setCurso = function (pCurso) {
        this.curso = pCurso;
    };
    Capacitacion.prototype.getCurso = function () {
        return this.curso;
    };
    Capacitacion.prototype.agregarNota = function (nota) {
        this.notasCurso.push(nota);
    };
    Capacitacion.prototype.getNotasCurso = function () {
        return this.notasCurso;
    };
    return Capacitacion;
}());
exports.Capacitacion = Capacitacion;
