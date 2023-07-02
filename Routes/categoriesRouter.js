const app = require("express");

const categories = require("../Controllers/categoriesControllers.js");

const auth = require("../authentication.js");

const router = app.Router();

router.use(app.json());

router.get("/", categories.getCategories);
router.get("/id:", categories.getCategoriesById);
router.post("/", auth.verify, categories.createCategory);
router.put("/", auth.verify, categories.updateCategory);
router.delete("/", auth.verify, categories.deleteCategory);

module.exports = router;
