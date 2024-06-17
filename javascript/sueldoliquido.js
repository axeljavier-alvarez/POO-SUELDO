/* var salario;
var bonificacion;
var comision;
var resultado;

var ahorro;
var iggs;
var prestamos;
var resultado2;
var globalIggs;
var resultadoFinal;
*/
var SueldoLiquido = /** @class */ (function () {
    function SueldoLiquido() {
        // sueldo liquido
        this.salario = 0;
        this.bonificacion = 0;
        this.comision = 0;
        this.totalGanado = 0;
        this.totalIggs = 0;
        /* pronto a usar */
        // egresos
        this.ahorro = 0;
        this.prestamos = 0;
        this.totalEgresos = 0;
        // sueldo liquido
        this.totalSueldoLiquido = 0;
    }
    // sueldo liquido
    SueldoLiquido.prototype.asignarSalario = function (valor) {
        this.salario = valor;
    };
    SueldoLiquido.prototype.asignarBonificacion = function (valor) {
        this.bonificacion = valor;
    };
    SueldoLiquido.prototype.asignarComision = function (valor) {
        this.comision = valor;
    };
    // egresos
    SueldoLiquido.prototype.asignarAhorro = function (valor) {
        this.ahorro = valor;
    };
    SueldoLiquido.prototype.asignarPrestamos = function (valor) {
        this.prestamos = valor;
    };
    /* total ganado*/
    SueldoLiquido.prototype.asignarTotalGanado = function () {
        this.totalGanado = this.salario + this.bonificacion + this.comision;
        return parseFloat(this.totalGanado.toFixed(2));
    };
    /* total iggs numero*/
    SueldoLiquido.prototype.asignarTotalIggs = function () {
        this.totalIggs = this.salario * 0.0483;
        return parseFloat(this.totalIggs.toFixed(2));
    };
    /* total egresos */
    SueldoLiquido.prototype.asignarTotalEgresos = function () {
        this.totalEgresos = this.ahorro + this.prestamos - this.asignarTotalIggs();
        return parseFloat(this.totalEgresos.toFixed(2));
    };
    /* total sueldo*/
    SueldoLiquido.prototype.asignarSueldoLiquido = function () {
        this.totalSueldoLiquido = this.asignarTotalGanado() - this.asignarTotalEgresos();
        return "El sueldo liquido es " + this.totalSueldoLiquido.toFixed(2);
    };
    return SueldoLiquido;
}());
// DONDE SE VERAN LOS RESULTADOS
var sueldoLiquido = new SueldoLiquido();
var divTotalGanado = document.getElementById('resultadoIngreso');
/* iggs*/
var divIggsCalculado = document.getElementById('iggs');
var divEgresos = document.getElementById('resultadoEgreso');
var divTotalSueldoLiquido = document.getElementById('resultadoFinal');
// obtener Datos del sueldo liquido
function obtenerDatos() {
    /* datos de ingresos*/
    sueldoLiquido.asignarSalario(parseFloat(document.getElementById("txtSalario").value));
    sueldoLiquido.asignarBonificacion(parseFloat(document.getElementById("txtBonificacion").value));
    sueldoLiquido.asignarComision(parseFloat(document.getElementById("txtComision").value));
    /* datos de egresos */
    sueldoLiquido.asignarAhorro(parseFloat(document.getElementById("txtAhorro").value));
    sueldoLiquido.asignarPrestamos(parseFloat(document.getElementById("txtPrestamo").value));
}
// calcular el sueldo liquido
function calcularTotalGanado() {
    obtenerDatos();
    divTotalGanado.textContent = (sueldoLiquido.asignarTotalGanado()).toString();
    divIggsCalculado.value = (sueldoLiquido.asignarTotalIggs()).toString();
}
function calcularEgresos() {
    obtenerDatos();
    divEgresos.textContent = (sueldoLiquido.asignarTotalEgresos()).toString();
}
function calcularSueldoLiquido() {
    obtenerDatos();
    divTotalSueldoLiquido.textContent = (sueldoLiquido.asignarSueldoLiquido());
}
