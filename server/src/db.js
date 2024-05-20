// Librerias
const { Sequelize } = require("sequelize");
require("dotenv").config();

const fs = require('fs');
const path = require('path');

// Extraer Variables de entorno
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

// Conexión con la Base de Datos
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, {
  logging: false, 
  native: false, 
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Cargar los modelos dinamicamente
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// Variable entre Modelos 
const { Country, Activity, User } = sequelize.models;

// Relación entre Modelos - User_Country
User.belongsToMany(Country, { through: 'User_Country' });
Country.belongsToMany(User, { through: 'User_Country' });

// Relación entre Modelos - Tour
Country.belongsToMany(Activity, {through: "Tour"});
Activity.belongsToMany(Country, {through: "Tour"});

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
  Country,             // para importa el modelo Country
  Activity,
  User
};