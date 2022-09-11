// plantear una clase auto 
//atriubuto contructor variables internas y metodos
// crear un programa traducido a js.
var Auto = /** @class */ (function () {
    function Auto(pMarca, pModelo, pTipo, pColor, pAnio, pCondicion) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.tipo = pTipo;
        this.color = pColor;
        this.anio = pAnio;
        this.condicion = pCondicion;
    }
    //   funciones
    Auto.prototype.llamarMarca = function () {
        return this.marca;
    };
    Auto.prototype.llamarModelo = function () {
        return this.modelo;
    };
    Auto.prototype.llamarTipo = function () {
        return this.tipo;
    };
    Auto.prototype.llamarAnio = function () {
        return this.anio;
    };
    Auto.prototype.llamarCondicion = function () {
        return this.condicion;
    };
    return Auto;
}());
var autoUno = new Auto("Chevrolet", "Cruze", "naftero", "Negro", 2022, true);
var autoDos = new Auto("Audi", "A5 cc", "naftero", "Negro", 2020, false);
var autoTres = new Auto("Fiat", "Argo", "naftero", "Rojo", 2021, false);
var autoCuatro = new Auto("Toyota", "Corolla", "naftero", "Blanco", 2022, true);
console.log("========== CONSECIONARIA EMI ===============");
console.log("          Los autos diponibles              ");
console.log("============================================");
console.log("1: ", autoUno);
console.log("2: ", autoDos);
console.log("3: ", autoTres);
console.log("4: ", autoCuatro);
