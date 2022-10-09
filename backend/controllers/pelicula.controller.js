const db = require("../models");
const Pelicula = db.peliculas;
const Op = db.Sequelize.Op;

// Create and Save a new Pelicula
exports.create = (req, res) => {
  console.log("Llegó al create")
  // Validate request
  if (!req.body.nombre || !req.body.fecha) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

  // Create a Pelicula
  const pelicula = {
    nombre: req.body.nombre,
    fecha: req.body.fecha,
    filename: req.file ? req.file.filename : ""
  }

  // Save Pelicula in the database
  Pelicula.create(pelicula).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the pelicula"
    })
  });
};

// Retrieve all Peliculas from the database.
exports.findAll = (req, res) => {
  Pelicula.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all Peliculas"
    })
  })
};

// Find a single Pelicula with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Pelicula.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Pelicula with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Pelicula with id=" + id
      });
    });
};

// Update a Pelicula by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  const pelicula = {
    nombre: req.body.nombre,
    fecha: req.body.fecha,
    filename: req.file ? req.file.filename : ""
  }

  Pelicula.update(pelicula, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Pelicula was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Pelicula with id=${id}. Maybe Pelicula was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Pelicula with id=" + id
      });
    });
};

// Delete a Pelicula with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Pelicula.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Pelicula was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Pelicula with id=${id}. Maybe Pelicula was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Pelicula with id=" + id
      });
    });
};
