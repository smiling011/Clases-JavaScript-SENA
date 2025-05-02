function generarColorAleatorio(){
    var letras = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * letras.length)];
        }
        return color;
        }