//Hacer un programa que halle el área de un círculo.

function AreaCirculo() {
    event.preventDefault();

    var r = parseFloat(document.getElementById("r").value);
    var pi = Math.PI
    var area = pi * Math.pow(r,2);

    document.getElementById("miDiv").innerText = `Area del Circulo: ${area.toFixed(2)}`;   
} 