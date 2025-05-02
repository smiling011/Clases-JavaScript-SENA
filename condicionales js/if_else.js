// pedir dos numeros y decir cual es el mayor

// igualdad ==
// desigualdad !=
// operadores logicos
// and&& cumple varias funciones
// or || cumple una de las funciones
// not ! negacion de una funcion

 // ctrl + k + c para comentar todo
  // ctrl + k + u para descomentar todo

// let n1 = parseInt(prompt("Ingresa un numreo"));
// let n2 = '22';
// let n3 = prompt("Ingresa tu nombre: ");

// if (n1 > n2) {
//     console.log ('el numero ${n1} es mayor qu el numero ${n2}');
//     console.log('Numero mayor: ${n1}');
// }
// else {
//     console.log ('el numero ${n1} es mayor qu el numero ${n2}');
//     console.log('Numero mayor: ${n2}');
// }

// if(m1 > 0) {
//     console.log('El numero ${m1} es positivo');

// }
// else if (m1 < 0){
//     console.log('El numero ${m1} es negativo');
// }
// else{
//     console.log('El numero ${m1} es cero');
// }



    // let n =234;
    // if (n > 10) {
    //     console.log('El numero ${n} es mayor que 10');

    // }
    // else if(n < 100) {
    //     console.log('El numero ${n} es menor que 100');
    // }
    // else if(n < 1000) {
    //     console.log('El numero ${n} es menor que 1000');
    // }
    // else if(n < 10000) {
    //     console.log('El numero ${n} es menor que 10000');
    // }
    // else{
    //     console.log('cifra fuera de rango')
    // }



// let n1 = 988;
// let n2 = 39/2;
// let n3 = -29;

// if (n1 > n2 && n2 > n3){
//     //console.log(`Orden decreciente ${n1},${n2},${n3}`);
//     mensaje = `Orden decreciente ${n1},${n2},${n3}`;
// }
// else if (n1 < n2 && n2 < n3){
//     //console.log(`Orden decreciente ${n1},${n3},${n2}`);
//     mensaje = `Orden decreciente ${n1},${n3},${n2}`
// }
// else if (n1 < n2 && n2 > n3){
//     //console.log(`Orden decreciente ${n2},${n1},${n3}`);
//     mensaje = `Orden decreciente ${n2},${n1},${n3}`
// }
// else{
//     //console.log(`Orden decreciente ${n3},${n2},${n1}`
//     mensaje = `Orden decreciente ${n3},${n2},${n1}`
// }

// console.log(mensaje);




let ValorImpuesto = 240000;
let estrato = 3
let incremento;

switch (estrato) {
    case 1:
        incremento = ValorImpuesto * 0.02;
        break;
    case 2:
        incremento = ValorImpuesto * 0.05;
        break;
    case 3:
        incremento = ValorImpuesto * 0.07;
        break;
    case 4:
        incremento = ValorImpuesto * 0.10;
        break;
    case 5:
        incremento = ValorImpuesto * 0.12;
        break;
    case 6:
        incremento = ValorImpuesto * 0.15;
        break;
    default:
        incremento = 0
        break;
}

console.log(el incremento para el estrato ${estrato} es: ${incremento});