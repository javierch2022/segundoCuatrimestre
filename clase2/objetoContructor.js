// clase 2 objetos 
var Televisor = /** @class */ (function () {
    //constructor de objeto, sirve para diferencias instancias 
    function Televisor(parametroPrendido, parametroVolumen, parametroCanal, parametroModelo, parametroMarca) {
        //aqui van las variables publicas + = + variables del constructor
        this.estaPrendido = parametroPrendido;
        this.volumenActual = parametroVolumen;
        this.canalActual = parametroCanal;
        this.modelo = parametroModelo;
        this.marca = parametroMarca;
    }
    //funcion prender apagar
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido === true) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    //funcion obtener numero de volumen
    Televisor.prototype.obtenerVolum = function () {
        return this.volumenActual;
    };
    //funcion subir el volumen actual
    Televisor.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual++;
    };
    return Televisor;
}());
//instancias de objetos
var primerTelevisor = new Televisor(true, 45, 67, 2020, "noblex");
var segundoTelevisor = new Televisor(true, 60, 15, 2022, "sony");
console.log(primerTelevisor);
console.log(segundoTelevisor);
// otra forma sin constructor
// let primerTelevisor = new Televisor();
// primerTelevisor.(llamo a la funcion)=>(agrego el atrivuto ejemplo numero o string);
