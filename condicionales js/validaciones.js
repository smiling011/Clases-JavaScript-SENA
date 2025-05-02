function validarCampos(event) {
    event.preventDefault();
    
    var nombre = document.getElementById("nombre").value;
    var edad = parseInt(document.getElementById("edad").value);
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var programa = document.getElementById("programa").value;
    var documento = document.getElementById("documento").files[0];
    var imagen = document.getElementById("imagen").files[0];

    // Validar el campo "nombre"
    if (nombre === "") {
        document.getElementById("errorNombre").innerText = "Campo obligatorio";
        return false;
    } else if (!/^[a-zA-Z]+$/.test(nombre)) {
        document.getElementById("errorNombre").innerText = "Ingrese solo letras";
        return false;
    } else {
        document.getElementById("errorNombre").innerText = ""; // Limpiar mensaje de error
    }

    // Validar el campo "edad"
    if (isNaN(edad) || edad <= 0) {
        document.getElementById("errorEdad").innerText = "Ingrese una edad válida";
        return false;
    } else {
        document.getElementById("errorEdad").innerText = ""; // Limpiar mensaje de error
    }

    // Validar el campo "email"
    if (email === "") {
        document.getElementById("errorEmail").innerText = "Campo obligatorio";
        return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("errorEmail").innerText = "Ingrese un correo electrónico válido";
        return false;
    } else {
        document.getElementById("errorEmail").innerText = ""; // Limpiar mensaje de error
    }

    // Validar el campo "password"
    if (password === "") {
        document.getElementById("errorPassword").innerText = "Campo obligatorio";
        return false;
    } else if (password.length < 6) {
        document.getElementById("errorPassword").innerText = "La contraseña debe tener al menos 6 caracteres";
        return false;
    } else {
        document.getElementById("errorPassword").innerText = ""; // Limpiar mensaje de error
    }

    // Validar el campo "programa"
    if (programa === "") {
        document.getElementById("errorPrograma").innerText = "Campo obligatorio";
        return false;
    } else {
        document.getElementById("errorPrograma").innerText = ""; // Limpiar mensaje de error
    }

    // Validar el campo "documento"
    if (!documento) {
        document.getElementById("errorDocumento").innerText = "Debe subir un documento";
        return false;
    } else {
        document.getElementById("errorDocumento").innerText = ""; // Limpiar mensaje de error
    }

    // Validar el campo "imagen"
    if (!imagen) {
        document.getElementById("errorImagen").innerText = "Debe subir una imagen";
        return false;
    } else {
        document.getElementById("errorImagen").innerText = ""; // Limpiar mensaje de error
    }

    // Si todas las validaciones pasan
    alert("Formulario enviado correctamente");
    return true;
}
