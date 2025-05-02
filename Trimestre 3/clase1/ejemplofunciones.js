//Funciones ejemplos
// ejemplo 1
function saludo(){
    document.write("hola")
}
saludo();

// ejemplo 2
function promedio(){
    var prom;
    var suma = 0;
    for (var i = 1; i <= 3; i++){
        var notas = parseFloat(prompt("Ingrese la Nota"+ i));
        suma += notas;
    }
    prom = suma / 3;
    document.write("<br>");
    document.write("El promedio es: " + prom);
}
promedio();

// ejemplo 3
function saludo(mensaje){
    document.write(mensaje);
}
saludo("Hi Dacky");

// ejemplo 4

function  promedio(numNotas) {
    var prom;
    var suma = 0;
    for (var i = 1; i <= numNotas; i++){
        var notas = parseFloat(prompt(`Ingrese la Nota ${i}`));
        if(!isNaN(notas)){
            suma += notas;
        }else{
            document.write(`Entrada no valida para la nota ${i}<br>`);
            return;
        }
        }
        prom = (suma / numNotas);
        document.write(`El promedio es: ${prom.toFixed(2)}`);
}
promedio(3);

// ejemplo 5
function sumar(num1,num){
    let resultado;
    resultado = num1 + num2;
    return resultado;
}
let suma = sumar(4,5);
document.write("La suma es: "+ suma);

// ejemplo 6
function invertirCadena(cadena){
    return cadena.split('').reverse().join('');
}
console.log(invertirCadena("hola"));


