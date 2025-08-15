const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((solicitud, respuesta) => {
    respuesta.setHeader('Content-Type', 'text/plain; charset=utf-8');

    if (solicitud.url === '/') {
        respuesta.statusCode = 200;
        respuesta.end('¡Bienvenido a mi Servidor!\n');
    } 
    else if (solicitud.url === '/acerca') {
        respuesta.statusCode = 200;
        respuesta.end('Esta es la página de Acerca de\n');
    } 
    else {
        respuesta.statusCode = 404;
        respuesta.end('Página no encontrada\n');
    }
});

server.listen(port, hostname, () => {
    console.log(`Servidor en ejecución en http://${hostname}:${port}/`);
});
