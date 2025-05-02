function validarFormulario(){
event.preventDefault();
    let codigo = document.getElementById("codigo").value;
    let nombre = document.getElementById("nombre").value;
    let precio = parseFloat(document.getElementById("precio").value);
    let descripcion = document.getElementById("descripcion").value;

    console.log(`${codigo}`);
    console.log(`${nombre}`);
    console.log(`${precio}`);
    console.log(`${descripcion}`);

    if (!codigo || !nombre || !precio || !descripcion) {
        document.getElementById("errorCampos").innerText = "Campos Obligatorios";
        return false;
    }
    else{
        document.getElementById("errorCampos").innerText = "";
    }
}