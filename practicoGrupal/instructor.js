"use strict";
exports.__esModule = true;
exports.Instructor = void 0;
var Instructor = /** @class */ (function () {
    function Instructor(pDNI, pNombre, pApellido, pCupoModVirt) {
        this.dni = pDNI;
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.cupoModalidadVirtual = pCupoModVirt;
        this.capacitaciones = [];
    }
    ;
    Instructor.prototype.inscribirACurso = function (capacitacion) {
        var flag = true;
        for (var i = 0; i < this.capacitaciones.length; i++) {
            if (this.capacitaciones[i] === capacitacion) {
                flag = false;
            }
        }
        if (flag) {
            this.capacitaciones.push(capacitacion);
            return true;
        }
        else {
            return false;
        }
    };
    Instructor.prototype.getNombre = function () {
        return this.nombre;
    };
    Instructor.prototype.getApellido = function () {
        return this.apellido;
    };
    return Instructor;
}());
exports.Instructor = Instructor;
