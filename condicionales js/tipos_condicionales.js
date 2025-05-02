let topping = prompt("Que topping deseas agregar")
let precio;
const helado = 1.90;
let precioFinal;

if (topping == "oreo") {
    precio = 1;
}
else if (topping == "kitkat") {
    precio = 1.5;
}
else if (topping == "brownie") {
    precio = 0.75;
}
else if (topping == "lacasitos") {
    precio = 0.95;
}
else{
    document.write("No tenemos este topping, lo sentimos<br>");
    precio = 0;
}
precioFinal = helado + precio;
document.write(`<strong>Precio a pagar: </strong> ${precioFinal.toFixed(2)}  euros`);



// En JavaScript, los condicionales son estructuras que permiten ejecutar diferentes bloques de código según ciertas condiciones. Aquí están los tipos principales:

// 1. Condicional if
// La estructura básica de un condicional en JavaScript. Evalúa si una condición es verdadera y, si lo es, ejecuta un bloque de código.
// javascript
// Copiar código
// if (condición) {
//     // Código a ejecutar si la condición es verdadera
// }
// Ejemplo:

// javascript
// Copiar código
// let x = 10;
// if (x > 5) {
//     console.log("x es mayor que 5");
// }
// 2. Condicional if...else
// Añade una alternativa que se ejecuta si la condición es falsa.
// javascript
// Copiar código
// if (condición) {
//     // Código a ejecutar si la condición es verdadera
// } else {
//     // Código a ejecutar si la condición es falsa
// }
// Ejemplo:

// javascript
// Copiar código
// let x = 3;
// if (x > 5) {
//     console.log("x es mayor que 5");
// } else {
//     console.log("x no es mayor que 5");
// }
// 3. Condicional else if
// Se utiliza para evaluar múltiples condiciones secuencialmente.
// javascript
// Copiar código
// if (condición1) {
//     // Código a ejecutar si la condición1 es verdadera
// } else if (condición2) {
//     // Código a ejecutar si la condición2 es verdadera
// } else {
//     // Código a ejecutar si ninguna condición es verdadera
// }
// Ejemplo:

// javascript
// Copiar código
// let x = 7;
// if (x > 10) {
//     console.log("x es mayor que 10");
// } else if (x > 5) {
//     console.log("x es mayor que 5 pero menor o igual a 10");
// } else {
//     console.log("x es menor o igual a 5");
// }
// 4. Condicional switch
// Evalúa una expresión y ejecuta el bloque de código correspondiente al valor coincidente de la expresión.
// javascript
// Copiar código
// switch (expresión) {
//     case valor1:
//         // Código a ejecutar si la expresión es igual a valor1
//         break;
//     case valor2:
//         // Código a ejecutar si la expresión es igual a valor2
//         break;
//     // Puedes agregar más casos según sea necesario
//     default:
//         // Código a ejecutar si no coincide con ninguno de los casos anteriores
// }
// Ejemplo:

// javascript
// Copiar código
// let color = "rojo";
// switch (color) {
//     case "azul":
//         console.log("El color es azul");
//         break;
//     case "rojo":
//         console.log("El color es rojo");
//         break;
//     default:
//         console.log("No se conoce el color");
// }
// 5. Condicional Ternario (condición ? expresión1 : expresión2)
// Una forma abreviada de if...else que evalúa una condición y devuelve un valor según si la condición es verdadera o falsa.
// javascript
// Copiar código
// condición ? expresión1 : expresión2
// Ejemplo:

// javascript
// Copiar código
// let x = 10;
// let mensaje = x > 5 ? "x es mayor que 5" : "x no es mayor que 5";
// console.log(mensaje);