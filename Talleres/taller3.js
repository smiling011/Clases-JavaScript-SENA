`Elabore un algoritmo que Calcula el precio de un boleto de viaje,
tomando en cuenta el número de kilómetros que se van a recorrer,
siendo el precio $500 por Km.`

function viaje() {
    event.preventDefault();

    var kmRecorrido = parseFloat(document.getElementById("kmRecorrido").value);
    var costo =  kmRecorrido * 500;
    var total = costo;

    document.getElementById("miDiv").innerText = `Total a pagar: ${total.toFixed(2)}`;   
} 