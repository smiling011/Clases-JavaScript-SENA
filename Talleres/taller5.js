`Calcular el nuevo salario de un empleado si se le descuenta el 20% de
su salario actual.`

function Factura() {
    event.preventDefault();

    var salario = parseFloat(document.getElementById("salario").value);
    var descuento = salario * 20 / 100;
    var nuevoSalario = salario - descuento;

    document.getElementById("miDiv").innerText = `Nuevo Salario: ${nuevoSalario.toFixed(2)}`;   
} 