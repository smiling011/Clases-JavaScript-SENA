  // crear un programa que calcule el impuesto sobre la renta de una
 // persona basado en sus ingresos. si los ingresos son menores a $20.000, 
 // no se aplica impuesto. si estan entre 20mil y 40mil, el impuesto
 // es de 10%. si los ingresos superan los 40mil pero son menores a 60mil
 // el impuesto es del 30%. ademas si la persona tiene dependientes se le ressta $1000 
 // por cada dependiente de los ingresos antes de calcular

 function examen() {
    event.preventDefault();
    var ingresos = parseFloat(document.getElementById("ingresos").value);
    var dependientes = parseFloat(document.getElementById("dependientes").value);
    var impuesto = 0;
    var ingresosNetos = ingresos - (dependientes * 1000);
    if (ingresosNetos < 20000) {
        impuesto = 0;
    } 
    else if (ingresosNetos >= 20000 && ingresosNetos <= 40000) {
        impuesto = ingresosNetos * 0.1;
    }
    else if (ingresosNetos > 40000 && ingresosNetos <= 60000) {
        impuesto = ingresosNetos * 0.3;
    }
    document.getElementById("impuesto").value = impuesto.toFixed(2);
}