// VARIABLES
/* var sueldo;
var añosPendientes;
var mesesPendientes;
var salarioPendiente;
var cobrosPendientes;
var bono14;
var aguinaldo;

var operacion;*/
var Indemnizacion = /** @class */ (function () {
    function Indemnizacion() {
        this.sueldo = 0;
        this.añosPendientes = 0;
        this.mesesPendientes = 0;
        this.salariosPendientes = 0;
        this.cobrosPendientes = 0;
        this.bono14 = 0;
        this.aguinaldo = 0;
        this.indemnizacion = 0;
    }
    /* variables que necesito xd*/
    Indemnizacion.prototype.asignarSueldo = function (valor) {
        this.sueldo = valor;
    };
    Indemnizacion.prototype.asignarAñosPendientes = function (valor) {
        this.añosPendientes = valor;
    };
    Indemnizacion.prototype.asignarMesesPendientes = function (valor) {
        this.mesesPendientes = valor;
    };
    Indemnizacion.prototype.asignarSalarioPendientes = function (valor) {
        this.salariosPendientes = valor;
    };
    Indemnizacion.prototype.asignarCobrosPendientes = function (valor) {
        this.cobrosPendientes = valor;
    };
    // BONO 14
    Indemnizacion.prototype.calcularBono14 = function () {
        this.bono14 = (this.sueldo / 12) * this.mesesPendientes;
        return parseFloat(this.bono14.toFixed(2));
    };
    // AGUINALDO
    Indemnizacion.prototype.calcularAguinaldo = function () {
        this.aguinaldo = (this.sueldo / 12) * this.mesesPendientes;
        return parseFloat(this.aguinaldo.toFixed(2));
    };
    // INDEMNIZACION
    Indemnizacion.prototype.calcularIndemnizacion = function () {
        this.indemnizacion = this.sueldo + this.añosPendientes + this.mesesPendientes + this.salariosPendientes + this.cobrosPendientes + this.calcularBono14() + this.calcularAguinaldo();
        return "La indemnizaciones de : " + this.indemnizacion.toFixed(2) + "\n";
    };
    return Indemnizacion;
}());
/* VARIABLES GENERALES Y DONDE SE MOSTRARA LA RESPUESTA*/
var indemnizacion = new Indemnizacion();
// calcular el bono 14
var divBono14Calculado = document.getElementById('txtBono14');
var divAguinaldoCalculado = document.getElementById('txtAguinaldo');
var divResultadoCalculado = document.getElementById('txtResultado');
// obtener datos de inputs
function obtenerDatos() {
    indemnizacion.asignarSueldo(parseFloat(document.getElementById("txtSueldo").value));
    indemnizacion.asignarAñosPendientes(parseFloat(document.getElementById("txtAñosPendientes").value));
    indemnizacion.asignarMesesPendientes(parseFloat(document.getElementById("txtMesesPendientes").value));
    indemnizacion.asignarSalarioPendientes(parseFloat(document.getElementById("txtSalarioPendiente").value));
    indemnizacion.asignarCobrosPendientes(parseFloat(document.getElementById("txtCobrosPendientes").value));
}
function calcularIndemnizacion() {
    obtenerDatos();
    divBono14Calculado.textContent = (indemnizacion.calcularBono14()).toString();
    divAguinaldoCalculado.textContent = (indemnizacion.calcularAguinaldo().toString());
    divResultadoCalculado.value = indemnizacion.calcularIndemnizacion();
}
