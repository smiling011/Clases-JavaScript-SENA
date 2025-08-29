const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");

app.use("/usuarios", userRoutes);

app.listen(3001, () =>{
    console.log('Servidor corriendo en http://localhost:3001');
});
