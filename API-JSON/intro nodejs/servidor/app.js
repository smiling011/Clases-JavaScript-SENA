const http = require("http");
const servidor = http.createServer((solicitud, respuesta) => {
    respuesta.writehead(200, {"Content.Type": "text-plain" });
    // respuesta.writehead("Primera linea de la respuesta");
    // respuesta.writehead("Segunda linea de la respuesta");
    respuesta.end("Hola desde Node.js");

});

servidor.listen(3000, () => {
    console.log("Servidor escuchemos en http://localhost:3000");
});