function calcularCosto() {
    event.preventDefault();

    var horas = parseFloat(document.getElementById("horas").value);
    var minutos = parseFloat(document.getElementById("minutos").value);
    var segundos = parseFloat(document.getElementById("segundos").value);

    var totalSegundos = (horas * 3600) + (minutos * 60) + segundos;
    var costoPorSegundo = 200;
    var costoTotal = totalSegundos * costoPorSegundo;

    document.getElementById("miDiv").innerText = `Costo Total del Proceso: $${costoTotal.toFixed(2)}`;
}
