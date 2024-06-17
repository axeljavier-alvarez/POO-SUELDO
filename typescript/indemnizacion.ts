// VARIABLES
/* var sueldo;
var añosPendientes;
var mesesPendientes;
var salarioPendiente;
var cobrosPendientes;
var bono14;
var aguinaldo;
var operacion;*/
class Indemnizacion {
    private sueldo: number = 0;
    private añosPendientes: number = 0;
    private mesesPendientes: number = 0;
    private salariosPendientes: number = 0;
    private cobrosPendientes: number = 0;
    private bono14: number = 0;
    private aguinaldo: number = 0;
    private indemnizacion: number = 0;
    /* variables que necesito xd*/
    public asignarSueldo(valor: number){
        this.sueldo = valor;
    }
    public asignarAñosPendientes(valor: number){
        this.añosPendientes = valor;
    }
    public asignarMesesPendientes(valor: number){
        this.mesesPendientes = valor;
    }
    public asignarSalarioPendientes(valor: number){
        this.salariosPendientes = valor;
    }

    public asignarCobrosPendientes(valor: number){
        this.cobrosPendientes = valor;
    }
    // BONO 14
    public calcularBono14(){
        this.bono14 = (this.sueldo/12) * this.mesesPendientes;
        return parseFloat(this.bono14.toFixed(2));
    }
    // AGUINALDO
    public calcularAguinaldo(){
        this.aguinaldo = (this.sueldo/12) * this.mesesPendientes;
        return parseFloat(this.aguinaldo.toFixed(2));
    }

    // INDEMNIZACION
    public calcularIndemnizacion(){
        this.indemnizacion = this.sueldo+this.añosPendientes+this.mesesPendientes+this.salariosPendientes+this.cobrosPendientes+this.calcularBono14()+this.calcularAguinaldo();
        return "La indemnizaciones de : " + this.indemnizacion.toFixed(2) + "\n";
    }
}
/* VARIABLES GENERALES Y DONDE SE MOSTRARA LA RESPUESTA*/
const indemnizacion = new Indemnizacion();
// calcular el bono 14
let divBono14Calculado = document.getElementById('txtBono14') as HTMLParagraphElement;
let divAguinaldoCalculado = document.getElementById('txtAguinaldo') as HTMLParagraphElement;
let divResultadoCalculado = document.getElementById('txtResultado') as HTMLInputElement;

// obtener datos de inputs
function obtenerDatos() : void { 

    indemnizacion.asignarSueldo(
        parseFloat((document.getElementById("txtSueldo") as HTMLInputElement).value)
    );

    indemnizacion.asignarAñosPendientes(
        parseFloat((document.getElementById("txtAñosPendientes") as HTMLInputElement).value)
    );

    indemnizacion.asignarMesesPendientes(
        parseFloat((document.getElementById("txtMesesPendientes") as HTMLInputElement).value)
    );

    indemnizacion.asignarSalarioPendientes(
        parseFloat((document.getElementById("txtSalarioPendiente") as HTMLInputElement).value)
    );

    indemnizacion.asignarCobrosPendientes(
        parseFloat((document.getElementById("txtCobrosPendientes") as HTMLInputElement).value)
    );

}

function calcularIndemnizacion() : void {
    obtenerDatos();
    divBono14Calculado.textContent = (indemnizacion.calcularBono14()).toString();
    divAguinaldoCalculado.textContent = (indemnizacion.calcularAguinaldo().toString());
    divResultadoCalculado.value = indemnizacion.calcularIndemnizacion();

}




