// Foreach
// ciclo


//Ejemplo 1
let numeros = [1,3,5,7,9]
numeros.forEach(function(numeros){
    console.log(numeros);
});


//Ejemplo 2

let numeros1 = [1,3,5,7,9];
let producto = 1;
let suma = 0;

numeros1.forEach((numero)=>{
    if (numero > 5){
        producto *= numero;
    }
    else {
        suma = suma + numero;
    }
});
console.log(producto);
console.log(suma);


//Ejemplo 3
let programas = ['ADSO', 'TPS', 'AD', ' Multimedia'];
programas.forEach(function (programa) {
console.log(programas);
});

//Ejemplo 4
let productos = [
    {nombre: 'mouse', precio: 60},
    {nombre: 'teclado', precio: 80},
    {nombre: 'monitor', precio: 120}
];
productos.forEach((producto) => {
    producto.precio = producto.precio + 5;
});
console.log(productos);

//Ejemplo 5 
