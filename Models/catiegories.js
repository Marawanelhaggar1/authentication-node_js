const uid = require("uid");
let catigories = [];

exports.get = () => {
  return catigories;
};

exports.find = (id) => {
  return catigories.find((i) => {
    return i.id == id;
  });
};

exports.create = (cat) => {
  cat.id = uid.uid();
  catigories.push(cat);
  return cat;
};

exports.update = (id, cat) => {
  let i = catigories.findIndex((c) => c.id == id);

  if (i === -1) {
    return "No category with that id was found";
  } else {
    Object.keys(catigories[i]).forEach((k) => {
      catigories[i][k] = cat[k] || catigories[i][k];
    });

    return catigories[i];
  }
};

exports.delete = (id) => {
  let i = catigories.findIndex((c) => c.id === id);

  if (i === -1) {
    return "No category with that id was found";
  } else {
    catigories.splice(i, 1);
  }
};
