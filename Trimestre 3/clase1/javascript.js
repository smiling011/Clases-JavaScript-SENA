function generarColorAleatorio(){
    var letras = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {
        color = color + letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

function cambiarColor(){
    var ColorAleatorio = generarColorAleatorio();
    document.getElementById("miDiv").style.backgroundColor = ColorAleatorio;
}

