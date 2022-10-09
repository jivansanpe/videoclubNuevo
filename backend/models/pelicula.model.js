module.exports = (sequelize, Sequelize) => {
  const Pelicula = sequelize.define("pelicula", {
    nombre: {
      type: Sequelize.STRING
    },
    fecha: {
      type: Sequelize.STRING
    },
    filename: {
      type: Sequelize.STRING
    }
  });

  return Pelicula;
}