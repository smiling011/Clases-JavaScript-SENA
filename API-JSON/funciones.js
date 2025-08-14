// Funcion declarativa
function validarcampoVacio(valor) {
    return valor.trim()=== "" ? "Campo Vacio" : "Campo lleno";
}

// funcion flecha 
 const validarcampoVacio = (valor) => valor.trim() === "" ? "Campo Vacio"

//  callback:
// funcion que se pasa como argumento a otra funcion 
// y se ejecuta dentro de esa otra funcion cuando se necesite
