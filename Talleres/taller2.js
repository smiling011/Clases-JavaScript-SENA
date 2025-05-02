// Elabore un programa que realice la conversión de libras a kilogramos
//Donde 1 Kg. = 2.2046 libras.

function calcularConversion() {
    event.preventDefault();
    // lee los datos
    var pesoLibras = parseFloat(document.getElementById("pesoLibras").value);

   // Hace la conversion
    var pesoKg =  pesoLibras / 2.20;
    
    // da el total 
    var total = pesoKg;

    document.getElementById("miDiv").innerText = `Total en Kg: ${total.toFixed(2)}`;   
} 