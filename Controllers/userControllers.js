const { strict } = require("assert");
const users = require("../Models/user.js");
const yup = require("yup");

exports.logIn = (req, res) => {
  const user = req.body;

  const userScheme = yup
    .object({
      email: yup.string().email().required(),
      password: yup.string().required(),
    })
    .noUnknown();
  try {
    userScheme.validateSync(user, { strict: true });
    res.send(users.checkUser(user));
  } catch (error) {
    res.send(error.toString());
  }
};

exports.register = (req, res) => {
  let user = req.body;

  const userScheme = yup
    .object({
      email: yup.string().email().required(),
      password: yup.string().required(),
      passwordRepeat: yup.string().required(),
    })
    .noUnknown();

  try {
    userScheme.validateSync(user, { strict: true });
    if (user.password !== user.passwordRepeat)
      throw "password and password repeat are not the same";

    res.send(users.addUser(user));
  } catch (error) {
    res.send(error.toString());
  }
};
