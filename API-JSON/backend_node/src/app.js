const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");

app.use("/usuarios", userRoutes);

app.listen(300, () =>{
    console.log('Servidor corriendo en http://localhost:3000');
});