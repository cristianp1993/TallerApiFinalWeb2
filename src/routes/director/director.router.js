const router = require("express").Router();
const {index, deleteDirector, updateDirector, edit, create,createRed} = require("../../controllers/directorController")

router.get("/", index);
router.get('/create', createRed);
router.get("/edit/:id", edit);
router.post("/", create);
router.delete("/:id", deleteDirector);
router.put("/:id",updateDirector );


module.exports = router