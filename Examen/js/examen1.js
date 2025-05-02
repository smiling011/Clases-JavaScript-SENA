//  calcula el promedio de 6 calificaciones de un estudiante donde, las primeras
//  3 calificaciones tienen un peso del total del 50%
// y las tres restantes el 50% restante. luego suma 5 puntos adicionales si el promedio supera 80 

function examen() {
    event.preventDefault();
    var calificacion1 = parseFloat(document.getElementById("calificacion1").value);
    var calificacion2 = parseFloat(document.getElementById("calificacion2").value);
    var calificacion3 = parseFloat(document.getElementById("calificacion3").value);
    var calificacion4 = parseFloat(document.getElementById("calificacion4").value);
    var calificacion5 = parseFloat(document.getElementById("calificacion5").value);
    var calificacion6 = parseFloat(document.getElementById("calificacion6").value);


   
    var promedio1 = (calificacion1 + calificacion2 + calificacion3)/3;
    var promedio2 = (calificacion4 + calificacion5 + calificacion6)/3;
    var promedioTotal = (promedio1 * 0.5)+(promedio2 + 0.5);

    if (promedioTotal == 80){
        promedioTotal + 5
    }

    document.getElementById("miDiv").innerText = `total: ${promedioTotal.toFixed(2)}`; 
} 
