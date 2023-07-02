const categories = require("../Models/catiegories.js");
const yup = require("yup");

exports.getCategories = (req, res) => {
  res.send(categories.get());
};

exports.getCategoriesById = (req, res) => {
  res.send(categories.find(req.params.id) || "Category not found");
};

exports.createCategory = (req, res) => {
  let category = req.body;

  const catScheme = yup
    .object({
      name: yup.string().required(),
    })
    .noUnknown();

  try {
    catScheme.validateSync(category, { strict: true });
    res.send(categories.create(category));
  } catch (error) {
    res.send(error.toString());
  }
};

exports.updateCategory = (req, res) => {
  let id = req.params.id;
  let category = req.body;
  const catScheme = yup
    .object({
      name: yup.string().required(),
    })
    .noUnknown();

  try {
    catScheme.validateSync(category, { strict: true });
    res.send(categories.update(id, category));
  } catch (error) {
    res.send(error.toString());
  }
};

exports.deleteCategory = (req, res) => {
  let id = req.params.id;
  res.send(categories.delete(id));
};
