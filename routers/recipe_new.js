const express = require("express");
const router = express.Router();

const {getAllRecipes,getAllRecipesTesting} = require("../controllers/recipe_new");


router.route("/").get(getAllRecipes);
router.route("/testing").get(getAllRecipesTesting);

module.exports = router;