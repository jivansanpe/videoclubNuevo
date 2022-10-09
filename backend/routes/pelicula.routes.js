module.exports = app => {
  const peliculas = require("../controllers/pelicula.controller");
  var upload = require('../multer/upload');

  var router = require("express").Router();

  // Create a new Pelicula
  router.post("/", upload.single('file'), peliculas.create);

  router.post("/", peliculas.create);

  // Retrieve all Peliculas
  router.get("/", peliculas.findAll);

  // Retrieve a single Pelicula with id
  router.get("/:id", peliculas.findOne);

  // Update a Pelicula with id
  router.put("/:id", upload.single('file'), peliculas.update);

  // Delete a Pelicula with id
  router.delete("/:id", peliculas.delete);

  app.use("/api/peliculas", router);
}