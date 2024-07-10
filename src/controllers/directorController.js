const Director = require("../models/directorModel");
const Movie = require("../models/movieModel");

const index = async (req, res) => {
    try {
      const result = await Director.findAll({
        order: [["nombres", "ASC"]]
      });
  
      //console.log(result)
      res.render("director/index", { user: req.user, data: result });
    } catch (error) {
      res.status(500).send(error.message);
    }
    //res.send('HOLA');
  };

  const createRed =async (req, res) => {
    res.render('director/create');
}

  const create = async (req, res) => {
    try {
        const { nombres, apellidos, fecha_nacimiento, cantidad_peliculas } = req.body;
        console.log("Creando Nuveo director")
        const newDirector = await Director.create({
            nombres,
            apellidos,
            fecha_nacimiento,
            cantidad_peliculas
        });

        res.redirect('/director');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



  const deleteDirector = async (req, res) => {
    try {
        const directorId = req.params.id;
        console.log("DirectorID:", directorId);

        // Verificar si hay películas asociadas al director
        const countMovies = await Movie.count({
          where: { director_id: directorId }
        });
        console.log("Cantidad de peliculas :", countMovies);

        if (countMovies > 0) {
          // Si hay películas asociadas
          return res.status(400).json({ message: "No se puede eliminar. Hay películas asociadas a este director." });
        }

        const director = await Director.findByPk(directorId);
        if (!director) {
          return res.status(404).json({ message: "Director no encontrado" });
        }
    
        await director.destroy();
        console.log("Director Eliminado:", directorId);

        res.status(200).json({ message: "Director eliminado correctamente." });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}

const updateDirector = async (req, res) => {
    try {
        const directorId = req.params.id;
        const { nombres, apellidos, fecha_nacimiento, cantidad_peliculas } = req.body;

        const director = await Director.findByPk(directorId);
        if (!director) {
            return res.status(404).json({ message: "Director no encontrado" });
        }

        director.nombres = nombres;
        director.apellidos = apellidos;
        director.fecha_nacimiento = fecha_nacimiento;
        director.cantidad_peliculas =cantidad_peliculas;

        await director.save();
        res.status(200).json({ message: "Director actualizado correctamente" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const edit = async (req, res) => {
    try {
      const directorId = req.params.id;
      const director = await Director.findByPk(directorId);
  
      if (!director) {
        return res.status(404).send("Director no encontrado");
      }
  
      res.render("director/edit", { director});
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  module.exports={
    index,deleteDirector,updateDirector,edit,create,createRed
  }