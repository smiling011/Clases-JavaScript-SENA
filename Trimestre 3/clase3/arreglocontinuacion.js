// ejemplo 4
let arreglo = new Array(5);
let contCeros = 0;
let contPos = 0;
let contNeg = 0;
let sumaPos = 0;
let sumaNeg = 0;
let promPos = 0;
let promNeg = 0;
for (let i = 0; i < arreglo.length; i++) {
    arreglo[i] = parseInt(prompt(`Ingrese un elemento para posicion ${i} del arreglo`));
    if (arreglo[i] == 0) {
        contCeros++;
    } 
    else if (arreglo[i] > 0) {
        contPos++;
        sumaPos += arreglo[i];
    }
    else{
        contNeg++;
        sumaNeg += arreglo[i];
    }
}

if (contPos == 0){
    console.log("No se puede calcular el promedio de kos numeros positivos");
}
else{
    promPos = sumaPos / contPos;
}
if (contNeg == 0){
    console.log("No se puede calcular el promedio de los numeros negativos");
}
else{
    promNeg = sumaNeg / contNeg;
}
console.log(`Promedio de los numeros positivos: ${promPos}`);
console.log(`Promedio de los numeros negativos: ${promNeg}`);
console.log(`Cantidad de ceros ingresados ${contCeros}`);
