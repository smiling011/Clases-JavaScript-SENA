`Un alumno desea saber cuál será su promedio general en las tres
materias más difíciles que cursa y cuál será el promedio que obtendrá
en cada una de ellas. Estas materias se evalúan como se muestra a
continuación:

La calificación de Matemáticas se obtiene de la siguiente manera:
Examen 90%
Promedio de tareas 10%
En esta materia se pidió un total de tres tareas

La calificación de Física de obtiene de la siguiente manera:
Examen 80%
Promedio de tareas 20%
En esta materia se pidió un total de dos tareas

La calificación de Química se obtiene de la siguiente manera:
Examen 85%
Promedio de tareas 15%
En esta materia se pidió un promedio de tres tareas.`

function calcularPromedios() {
    event.preventDefault();

// Mate
    var examMate = parseFloat(document.getElementById("examMate").value);
    var tareaMate1 = parseFloat(document.getElementById("tareaMate1").value);
    var tareaMate2 = parseFloat(document.getElementById("tareaMate2").value);
    var tareaMate3 = parseFloat(document.getElementById("tareaMate3").value);
    var promTareasMate = (tareaMate1 + tareaMate2 + tareaMate3) / 3;
    var promMate = (examMate * 0.9) + (promTareasMate * 0.1);

// Fisica
    var examFisica = parseFloat(document.getElementById("examFisica").value);
    var tareaFisica1 = parseFloat(document.getElementById("tareaFisica1").value);
    var tareaFisica2 = parseFloat(document.getElementById("tareaFisica2").value);
    var promTareasFisica = (tareaFisica1 + tareaFisica2) / 2;
    var promFisica = (examFisica * 0.8) + (promTareasFisica * 0.2);

// Quimica
    var examQuimica = parseFloat(document.getElementById("examQuimica").value);
    var tareaQuimica1 = parseFloat(document.getElementById("tareaQuimica1").value);
    var tareaQuimica2 = parseFloat(document.getElementById("tareaQuimica2").value);
    var tareaQuimica3 = parseFloat(document.getElementById("tareaQuimica3").value);
    var promTareasQuimica = (tareaQuimica1 + tareaQuimica2 + tareaQuimica3) / 3;
    var promQuimica = (examQuimica * 0.85) + (promTareasQuimica * 0.15);

    
    var promGeneral = (promMate + promFisica + promQuimica) / 3;

    
    document.getElementById("resultados").innerHTML = `
        <p>Promedio Matemáticas: ${promMate.toFixed(2)}</p>
        <p>Promedio Física: ${promFisica.toFixed(2)}</p>
        <p>Promedio Química: ${promQuimica.toFixed(2)}</p>
        <p>Promedio General: ${promGeneral.toFixed(2)}</p>
    `;
}
