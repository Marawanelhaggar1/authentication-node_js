const app = require("express");
const users = require("../Controllers/userControllers.js");

const loginRouter = app.Router();
const registerRouter = app.Router();

loginRouter.use(app.json());
registerRouter.use(app.json());

loginRouter.post("/", users.logIn);
registerRouter.post("/", users.register);

module.exports = { loginRouter, registerRouter };
