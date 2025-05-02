function validarCampos(event) {
    event.preventDefault();

    var nombre = document.getElementById("nombre").value.trim();
    var codigo = document.getElementById("codigo").value.trim();
    var precio = parseFloat(document.getElementById("precio").value);
    var categoria = document.getElementById("categoria").value;
    var proveedor = document.getElementById("proveedor").value;

    if (nombre === "") {
        document.getElementById("errorNombre").innerText = "Campo erronero";
        return false;
    } else if (!/^[a-zA-Z\s]+$/.test(nombre)) {
        document.getElementById("errorNombre").innerText = "Campo erronero";
        return false;
    } else {
        document.getElementById("errorNombre").innerText = "Campo erronero"; 
    }

    if (codigo === "") {
        document.getElementById("errorCodigo").innerText = "Campo erronero";
        return false;
    } else if (!/^[a-zA-Z0-9]{5,10}$/.test(codigo)) {
        document.getElementById("errorCodigo").innerText = "Campo erronero";
        return false;
    } else {
        document.getElementById("errorCodigo").innerText = "Campo erronero"; 
    }

    if (isNaN(precio) || precio <= 0) {
        document.getElementById("errorPrecio").innerText = "Campo erronero";
        return false;
    } else {
        document.getElementById("errorPrecio").innerText = "Campo erronero"; 
    }

    if (categoria === "") {
        document.getElementById("errorCategoria").innerText = "Campo erronero";
        return false;
    } else {
        document.getElementById("errorCategoria").innerText = "Campo erronero"; 
    }

    if (proveedor === "") {
        document.getElementById("errorProveedor").innerText = "Campo erronero";
        return false;
    } else {
        document.getElementById("errorProveedor").innerText = "Campo erronero"; 
    }

    alert("Formulario enviado correctamente");
    return true;
}

document.getElementById("productForm").addEventListener("submit", validarCampos);
