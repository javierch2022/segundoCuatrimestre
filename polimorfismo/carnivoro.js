"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var mamiferos_1 = require("./mamiferos");
var Carnivoro = /** @class */ (function (_super) {
    __extends(Carnivoro, _super);
    // clase  y contructor//
    function Carnivoro(nombre, especie, velocidadDesplazamiento, alimentacion, sangre) {
        var _this = _super.call(this, nombre, especie, velocidadDesplazamiento, alimentacion) || this;
        _this.sangre = sangre;
        return _this;
    }
    // funciones publicas /////////////   
    Carnivoro.prototype.getDesplazamiento = function () {
        return this.velocidadDesplazamiento;
    };
    Carnivoro.prototype.setDesplazamiento = function (VelocidadDesplazamiento) {
        this.velocidadDesplazamiento = VelocidadDesplazamiento + 40;
    };
    Carnivoro.prototype.setAlimentacion = function (alimentacion) {
        this.alimentacion = " Carnes: " + alimentacion;
    };
    return Carnivoro;
}(mamiferos_1.Mamifero));
/// exportacion de la clase
exports["default"] = Carnivoro;
var newCarnivoro = new Carnivoro('emi', 'carnivoro', 1, "solido", "roja");
console.log(newCarnivoro.getDesplazamiento());
