function calcularPresupuesto() {
    event.preventDefault();

var presupuesto  = parseFloat(prompt("Ingrese presupuesto: "));

var ginecologia = presupuesto + 0.40;
var traumologia = presupuesto * 0.30;
var pedriatria = presupuesto * 0.30;
var total = `Presupuestos por cada area <br>
                Ginecologia: ${ginecologia}<br>
                Traumlologia: ${traumologia}<br>
                Pedriatria: ${pedriatria}<br>`
document.write("miDiv").innerText = `Total: ${total}`;

}