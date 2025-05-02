//asignacion de elementos al array despues de definir el tamaño

//ejemplo1
let arreglo2 = new Array(3);
arreglo2[0] = 10;
arreglo2[1] = 20;
arreglo2[2] = 30;

console.log(`Elemento de la posicion 0 del arreglo: ${arreglo2[0]}`);
console.log(`Elemento de la posicion 1 del arreglo: ${arreglo2[1]}`);
console.log(`Elemento de la posicion 2 del arreglo: ${arreglo2[2]}`);

//ejemplo 2
let miArreglo2 = [1,3,5,7,9];

for (let i = 0; i < miArreglo2.length; i++){
    console.log(`Elemento de la posicion ${i} del arreglo: ${miArreglo2[i]}`);
}

//ejemplo 3
let miArreglo3 = Array(5);

for (let i = 0; i < miArreglo3.length; i++){
    miArreglo3[i] = prompt(`Ingrese un elemento para la posicion ${i} del arreglo: 
    ${miArreglo3[i]}`);
}


for (let i = 0; i < miArreglo3.length; i++) {
    console.log(`Ingrese un elemento para la posicion ${i} del arreglo: 
    ${miArreglo3[i]}`);
}