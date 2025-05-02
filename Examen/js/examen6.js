
function examen() {
    event.preventDefault();
    var salario = parseFloat(document.getElementById("salario").value);
    var anos = parseFloat(document.getElementById("anos").value);
    
    var impuesto = 0;
    var ingresosNetos = ingresos - (dependientes * 1000);
    if (ingresosNetos < 20000) {
        impuesto = 0.15;
    } 
    else if (ingresosNetos >= 20000 && ingresosNetos <= 40000) {
        impuesto = ingresosNetos * 0.1;
    }
    else if (ingresosNetos > 40000 && ingresosNetos <= 60000) {
        impuesto = ingresosNetos * 0.3;
    }
    document.getElementById("impuesto").value = impuesto.toFixed(2);
}