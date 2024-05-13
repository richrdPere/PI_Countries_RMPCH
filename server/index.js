// Librerias
const axios = require("axios");
const { Country } = require("./src/db.js");
const server = require("./src/server");
const { conn } = require('./src/db.js');

// Establecer el puerto 
const PORT = 3001;

// Guardar los datos de JSON a una Base de Datos
async function fetchAndSaveCountries() {
  try {
      // Hacer la solicitud Axios para obtener los datos de los países
      const response = await axios.get('http://localhost:5000/countries');
      const count = response.data;
      const countriesArray = Object.values(count).map((c) => {
        return {
          cca3: c.cca3,
          name: c.name.common,
          flags: c.flags.png,
          continents: c.continents[0],
          capital: c.capital ? c.capital[0] : 'Not found',
          subregion: c.subregion,
          area: c.area,
          population: c.population,
        };
      })
      await Country.bulkCreate(countriesArray);
    
      console.log(`Datos guardados correctamente...`);
  } catch (error) {
    console.error(`Error al obtener los datos de la API o guardarlos en la base de datos`, error.message);
  }
}

// Establecer Conexión a la BD y el Puerto por Defecto
conn.sync({ force: true }).then(() => {
server.listen(PORT, () => {

  // Datos 
  fetchAndSaveCountries();

  // Puerto
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
