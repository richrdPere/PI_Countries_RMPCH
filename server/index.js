// Librerias
const axios = require("axios");
const { Country, User } = require("./src/db.js");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const users = require('./src/utils/users.js');

// Establecer el puerto 
const PORT = 3002;

// Guardar los datos de JSON a la Base de Datos
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
    
      console.log(`Datos Guardados correctamente...`);
  } catch (error) {
    console.error(`Error al obtener los datos de la API o guardarlos en la base de datos`, error.message);
  }
}

// Guardar los datos de Users a la Base de Datos
// console.log(users.length);
// async function fetchAndSaveUsers(){
//   try{
//     const response = await axios.get('http://localhost:5000/users');
//     const count = response.data;
//     const usersArray = Object.values(users.length).map((user) => {
//       return {
//         id: user.id,
//         email: user.email,
//         password: user.password,
//         name: user.name,
//         lastName: user.lastName,
//         country: user.country,
//         continent: user.continent
//       }
//     })
//     await User.bulkCreate(usersArray);

//     console.log(`Datos Users Guardados correctamente...`);

//   } catch (error){
//     console.error(`Error al obtener los datos de la API o guardarlos en la base de datos`, error.message);
//   }
// }

// Establecer Conexión a la BD y el Puerto por Defecto
conn.sync({ force: true }).then(() => {
server.listen(PORT, () => {

  // Datos 
  fetchAndSaveCountries();
  //fetchAndSaveUsers();

  // Puerto
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
