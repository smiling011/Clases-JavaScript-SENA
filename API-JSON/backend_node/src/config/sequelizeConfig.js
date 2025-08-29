const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('node_mvc', 'root', '12345', {
    host: 'localhost',
    dialect: 'mysql',
    loogging: true, //para consultas
});

async function connectDB() {
    try {
        await sequeliza.authenticate();
        console.log('Conexion a la base de datos MySQL con Sequeliza estableciso correctamente.');
    } catch (error) {
        console.error('Error al conectar a la base de datos con Sequelize:', error);
        process.exist(1);
    }
}

module.exports = { sequelize, connectDB};