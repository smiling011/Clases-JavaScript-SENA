var contador = 1;
do{
    document.write("Vuelta nomero: " +contador+ "<br>");
    console.log(`vuelta numeri: ${contador}\n`);
    contador++;
}
while(contador <=10);

// ejemplo de ingreso de datos con validacion
let contrasenaCorrecta = "secreto";
let intentos = 3;
do {
    let contrasenaIngresada = prompt("Ingresa la contraseña: ");

    if (contrasenaIngresada === contrasenaCorrecta) {
        alert("Contraseña correcta");
        break;
        } else {
            intentos--;
            alert("Comtraseña Incorrecta. Intentos restantes: " + intentos);
        }
}
while (intentos > 0);