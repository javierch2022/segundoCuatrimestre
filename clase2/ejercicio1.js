// plantear una clase auto 
//atriubuto contructor variables internas y metodos
// crear un programa traducido a js.
// celular
var Celular = /** @class */ (function () {
    function Celular(pMarca, pModelo, pPrecio, pEstado) {
        //aqui van las variables publicas + = + variables del constructor
        this.marca = pMarca;
        this.modelo = pModelo;
        this.precio = pPrecio;
        this.estadoNuevo = pEstado;
    }
    Celular.prototype.condicion = function () {
        if (this.estadoNuevo === true) {
            this.estadoNuevo = false;
            console.log("Nuevo");
        }
        else {
            this.estadoNuevo = true;
            console.log("Usado");
        }
    };
    return Celular;
}());
var celularDubai = new Celular("motorola", "Epro+", 200.000, true);
var celularHawaii = new Celular("motorola", "g620", 50.000, false);
var celularFrontier = new Celular("motorola", "g++", 150.000, true);
console.log("El producto 1 es :"+ celularDubai.condicion);
console.log("El producto 2 es :", celularHawaii.condicion);
console.log("El producto 3 es :", celularFrontier.condicion);
