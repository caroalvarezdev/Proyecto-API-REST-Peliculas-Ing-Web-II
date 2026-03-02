const mongoose = require('mongoose');

const getConnection = async () => {
  try {
    const url = "mongodb+srv://caroalvarezdev:MongoDBCarolina91@peliculasapp.ezdeh7g.mongodb.net/?appName=PeliculasApp";

    await mongoose.connect(url);

    console.log("Base de datos conectada correctamente");
  } catch (error) {
    console.log("Error al conectar la base de datos", error);
  }
};

module.exports = { getConnection };