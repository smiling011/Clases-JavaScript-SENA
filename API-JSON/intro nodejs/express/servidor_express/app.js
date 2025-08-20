const express = requiere('express')
const path = require('path')

const app = express()
const port = 3001

app.use(express.static(path.join(__dirname,'public')))
app.get('/',(solicitud,respuesta)=>{
    respuesta.sendFile(path .join(__dirname,'public','index.html'))
})

app.get('/saludo/:nombre',(solicitud,respuesta)=>{
    const nombre = solicitud.params.nombre
    respuesta.send('<h1>Holii ${nombre}!!<h1><p>Bienvenido a la pagina de saludo<p>')
})

app.listen(port, () => {
    console.log(`Servidor Express ejecutandose en http://localhost:${port}`);
    console.log('Vista http://localhost:3001 en tu navegador');
    console.log('Tambien puedes probar la ruta dinamica, por ejemplo: http://localhost:3001/saludo/Vicky');
});

