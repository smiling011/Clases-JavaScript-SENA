// con var
var num;
var sumaTotal = 0;

for (var i = 0; i < 5; i++) {
    num = parseInt(prompt("Ingrese un numero"));
    sumaTotal = sumaTotal + num;
}
document.write("La suma total es: " + sumaTotal);

// con let
let num;
let sumaTotal = 0;

for (let i = 0; i < 5; i++) {
    num = parseInt(prompt("Ingrese un numero"));
    sumaTotal = sumaTotal + num;
}
document.write("La suma total es: " + sumaTotal);

// let te permite declarar variables limitando su alcance (scope) al bloque, declaración,
// o expresión donde se está usando. a diferencia de la palabra clave var
// la cual define una variable global o local en una función sin importar el ámbito del bloque.