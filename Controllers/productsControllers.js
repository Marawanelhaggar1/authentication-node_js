const yup = require("yup");
const products = require("../Models/products.js");

exports.getProducts = (req, res) => {
  res.send(products.get());
};

exports.getProductsById = (req, res) => {
  res.send(products.find(req.params.id) || "product not found");
};

exports.createproducts = (req, res) => {
  let product = req.body;

  const prodScheme = yup
    .object({
      name: yup.string().required(),
    })
    .noUnknown();

  try {
    prodScheme.validateSync(product, { strict: true });
    res.send(products.create(product));
  } catch (error) {
    res.send(error.toString());
  }
};

exports.updateproduct = (req, res) => {
  let id = req.params.id;
  let product = req.body;
  const prodScheme = yup
    .object({
      name: yup.string().required(),
    })
    .noUnknown();

  try {
    prodScheme.validateSync(product, { strict: true });
    res.send(products.update(id, product));
  } catch (error) {
    res.send(error.toString());
  }
};

exports.deleteproduct = (req, res) => {
  let id = req.params.id;
  res.send(products.delete(id));
};
