const app = require("express");

const products = require("../Controllers/productsControllers.js");

const auth = require("../authentication.js");

const router = app.Router();

router.use(app.json());

router.get("/", products.getProducts);
router.get("/id:", products.getProductsById);
router.post("/", auth.verify, products.createproducts);
router.put("/", auth.verify, products.updateproduct);
router.delete("/", auth.verify, products.deleteproduct);

module.exports = router;
