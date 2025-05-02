function examen() {
    event.preventDefault();

    var base = parseFloat(document.getElementById("base").value);
    var altura = parseFloat(document.getElementById("altura").value);

    area = (base * altura) / 2;
    area2 = area * 0.25;

    document.getElementById("miDiv").innerText = `Total del area: ${area.toFixed(2)}\nTotal del area del 75%: ${area2.toFixed(2)}`;
}
