const uid = require("uid");
let products = [];

exports.get = () => {
  return products;
};

exports.find = (id) => {
  return products.find((p) => p.id == id);
};

exports.create = (cat) => {
  cat.id = uid.uid();
  products.push(cat);
  return cat;
};

exports.update = (id, cat) => {
  let i = products.findIndex((c) => c.id == id);

  if (i === -1) {
    return "No category with that id was found";
  } else {
    Object.keys(products[i]).forEach((k) => {
      products[i][k] = cat[k] || products[i][k];
    });

    return products[i];
  }
};

exports.delete = (id) => {
  let i = products.findIndex((c) => c.id === id);

  if (i === -1) {
    return "No category with that id was found";
  } else {
    products.splice(i, 1);
  }
};
