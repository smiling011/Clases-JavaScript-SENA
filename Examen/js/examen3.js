// Calcula el precio total de una compra de 4 productos. 
// El primer producto tiene un 5% de descuento y un 10% de impuesto; 
// el segundo tiene un 10% de descuento y un 15% de impuesto;
// el tercero tiene un 15% de descuento y un 20% de impuesto; 
// y el cuarto tiene un 20% de descuento y un 25% de impuesto. vr. 5% 

function examen() {
    event.preventDefault();
    var producto1 = parseFloat(document.getElementById("producto1").value);
    var producto2 = parseFloat(document.getElementById("producto2").value);
    var producto3 = parseFloat(document.getElementById("producto3").value);
    var producto4 = parseFloat(document.getElementById("producto4").value);
    var impuesto = 0;
    var descuento = 0;
    var total = 0;


    var descuento1 = producto1 * 0.05;
    var impuesto1 = producto1 * 0.10;
    var total1 = producto1 - descuento1 + impuesto1;

    var descuento2 = producto2 * 0.10;
    var impuesto2 = producto2 * 0.15;
    var total2 = producto2 - descuento2 + impuesto2;

    var descuento3 = producto3 * 0.15;
    var impuesto3 = producto3 * 0.20;
    var total3 = producto3 - descuento3 + impuesto3;

    var descuento4 = producto4 * 0.20;
    var impuesto4 = producto4 * 0.25;
    var total4 = producto4 - descuento4 + impuesto4;

    total = total1 + total2 + total3 + total4;

    document.getElementById("miDiv").innerText = `total: ${total.toFixed(2)}`; 
} 