`Elabore un programa que permita ingresar el precio y la cantidad de
un artículo a comprar. Calcular el total a pagar. (Considerar el IVA
19%).`

function Factura() {
    event.preventDefault();

    var precioArt = parseFloat(document.getElementById("precioArt").value);
    var cantidad =  parseFloat(document.getElementById("cantidad").value);
    var iva = 0.19;
    var total = (precioArt * cantidad) * (1 + iva);

    document.getElementById("miDiv").innerText = `Total a pagar: ${total.toFixed(2)}`;   
} 