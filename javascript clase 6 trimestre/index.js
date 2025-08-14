import express from "express";
import mongose from mongose

const Usuarios = mongose.model('Usuarios',new mongose.Schea({
    usuario: String,
    correo: String,
    clave: String,

}));

const app = express();

mongose.connetc('la_ruta')

app.get('/', async(_rep, res) => {
    console.log("Listado de usuarios.. ");
    const usuarios = await Usuarios.find();
    return res.send(usuarios);
});

app.get('crear/', async(_rep, res) => {
    console.log("insertando ");
    await Usuarios.create({'usuario': 'Vicky', 'correo': 'vicky@gmail.com' , 'clave': '12345'});
    return res.send("oki");
});

app.listen(3000, () => console.log("escuchando el puerto: 3000"));