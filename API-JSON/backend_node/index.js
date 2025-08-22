const express = require ("express");
const app = express();

app.get("/", (solicitud, respuesta) => {
    respuesta.send("Hola, bienvenido a mi aplicacion con Express!");
});
app.get("/acerca", (req, res) => {
    res.send("Pagina de informacion sobre la APP");
});

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});

