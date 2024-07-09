const router = require("express").Router();
const { connectClient } = require("../../../config/postgres");
const Movie = require("../../models/movieModel");
const Director = require("../../models/directorModel");

router.get("/home", async (req, res) => {
  try {
    const result = await Movie.findAll({
      order: [["nombre", "ASC"]],
      include: [
        {
          model: Director,
          as: "director",
          attributes: ["nombres", "apellidos"], // Traer solo nombre y apellido del director
        },
      ],
    });

    //console.log(result)
    res.render("home", { user: req.user, movies: result });
  } catch (error) {
    res.status(500).send(error.message);
  }
  //res.send('HOLA');
});

// router.get("/", async (req, res) => {
//   const client = await connectClient();
//   try {
//     const result = await client.query("SELECT * FROM pelicula");
//     res.render("", { movies: result.rows });
//   } catch (error) {
//     res.status(500).send(error.message);
//   } finally {
//     await client.end();
//   }
// });
router.get("/create", async (req, res) => {
  const result = await Director.findAll({
    order: [["nombres", "ASC"]],
  });
  //console.log(result)
  res.render("movies/create", { user: req.user, directores: result });
});

router.get("/edit/:id", async (req, res) => {
  try {
    const movieId = req.params.id;
    const movie = await Movie.findByPk(movieId);

    const directors = await Director.findAll({
        order: [['nombres', 'ASC']]
      });

    if (!movie) {
      return res.status(404).send("Película no encontrada");
    }

    res.render("movies/edit", { movie ,directors});
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const {
      nombre,
      genero,
      fecha_estreno,
      director_id,
      vista,
      calificacion,
      critica,
    } = req.body;

    // Crear una nueva película usando los datos enviados en el formulario
    await Movie.create({
      nombre,
      genero,
      fecha_estreno,
      director_id,
      vista,
      calificacion,
      critica,
    });

    res.redirect("movies/home");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const taskId = req.params.id;
    const deletedTask = await Movie.findByPk(taskId);
    if (!deletedTask) {
      return res.status(404).send("Pelicula no encontrada");
    }

    await deletedTask.destroy();
    console.log("Pelicula Eliminada:", taskId);
    res.redirect("/home");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const {
    nombre,
    genero,
    fecha_estreno,
    director_id,
    vista,
    calificacion,
    critica,
  } = req.body;

  try {
    const movie = await Movie.findByPk(id);

    if (!movie) {
      return res.status(404).json({ error: "Película no encontrada" });
    }

    await movie.update({
      nombre,
      genero,
      fecha_estreno,
      director_id,
      vista: vista === "true",
      calificacion,
      critica,
    });

    console.log("Película actualizada:", movie);
    res.status(200).json(movie);
  } catch (error) {
    console.error("Error al actualizar la película:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

module.exports = router;
