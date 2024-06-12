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

class SueldoLiquido {
    // sueldo liquido
    private salario: number = 0;
    private bonificacion: number = 0;
    private comision: number = 0;
    private totalGanado: number = 0;
    private totalIggs: number = 0;
    /* pronto a usar */
    // egresos
    private ahorro: number = 0;
    private prestamos: number = 0;
    private totalEgresos: number = 0;


    // sueldo liquido
    public asignarSalario(valor: number) {
        this.salario = valor;
    }
    public asignarBonificacion(valor: number) {
        this.bonificacion = valor;
    }
    public asignarComision(valor: number) {
        this.comision = valor;
    }

    // egresos
    public asignarAhorro(valor: number){
        this.ahorro = valor;
    }

    public asignarPrestamos(valor: number){
        this.prestamos = valor;
    }

    /* total ganado*/
    public asignarTotalGanado() {
        this.totalGanado = this.salario + this.bonificacion + this.comision;
        return "El sueldo liquido es de: " + this.totalGanado.toFixed(2) + "\n";
    }
    /* total iggs numero*/
    public asignarTotalIggs() : number{
        this.totalIggs = this.salario * 0.0483; 
        return parseFloat(this.totalIggs.toFixed(2));
    }

    /* total egresos */
    public asignarTotalEgresos(){
        this.totalEgresos = this.ahorro + this.prestamos - this.asignarTotalIggs();
        return "El descuento es de: "+ this.totalEgresos.toFixed(2) + "\n";
    }
}

// DONDE SE VERAN LOS RESULTADOS
const sueldoLiquido = new SueldoLiquido();
let divSueldoLiquido = document.getElementById('resultadoIngreso') as HTMLParagraphElement;
/* iggs*/
let divIggsCalculado = document.getElementById('iggs') as HTMLInputElement;

let divEgresos = document.getElementById('resultadoEgreso') as HTMLParagraphElement;


// obtener Datos del sueldo liquido
function obtenerDatos() : void {
    /* datos de ingresos*/
    sueldoLiquido.asignarSalario(
        parseFloat((document.getElementById("txtSalario") as HTMLInputElement).value)
    );
    sueldoLiquido.asignarBonificacion(parseFloat((document.getElementById("txtBonificacion") as HTMLInputElement).value)
    );
    sueldoLiquido.asignarComision(parseFloat((document.getElementById("txtComision") as HTMLInputElement).value)
    );
    /* datos de egresos */
    sueldoLiquido.asignarAhorro(parseFloat((document.getElementById("txtAhorro") as HTMLInputElement).value)
    );
    sueldoLiquido.asignarPrestamos(parseFloat((document.getElementById("txtPrestamo") as HTMLInputElement).value)
    );
}
// calcular el sueldo liquido
function calcularSueldoLiquido() : void{
    obtenerDatos();
    divSueldoLiquido.textContent = sueldoLiquido.asignarTotalGanado();
}

/* convertir a tostring */
function calcularIggs() : void {
    obtenerDatos();
    divIggsCalculado.value = (sueldoLiquido.asignarTotalIggs()).toString();
}

function calcularEgresos(): void {
    obtenerDatos();
    divEgresos.textContent = sueldoLiquido.asignarTotalEgresos();
}

