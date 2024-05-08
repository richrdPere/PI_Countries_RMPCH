// Librerias
const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');


// Crear la app

// Habilitar lectura de datos de formulario

// Conexion a la Base de Datos

// Routing

// Establecer el puerto y arrancarlo
const PORT = 3001;

conn.sync({ force: true }).then(() => {
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
