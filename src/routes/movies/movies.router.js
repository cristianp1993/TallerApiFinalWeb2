const router = require("express").Router();
const {update,deleteMovie,edit,createRed,home,create} = require("../../controllers/moviesController")

router.get("/home", home);

router.get("/create", createRed);

router.get("/edit/:id", edit);

router.post("/", create);

router.delete("/:id", deleteMovie);

router.put("/:id",update );

module.exports = router;
