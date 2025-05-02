// //agregar un elemento al final del arreglo (push)

// // ejemplo 1
// let programas = ['ADSO', 'TPS', 'AD', ' Multimedia'];
// programas.push('diseño grafico');
// console.log(programas);

// //salida
// // ['ADSO', 'TPS', 'AD', ' Multimedia','talento humano', 'diseño grafico'];

// ejemplo 2

let programas1 = ['ADSO', 'TPS', 'AD', ' Multimedia'];
// //push
for (let i = 0; i < 3; i++){
    let programa = prompt("Ingresa un programa: ");
    programas1.push(programa);
    console.log("Nombres actualizados: ",programas1);
}