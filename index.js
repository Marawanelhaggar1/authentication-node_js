const express = require("express");
const categoriesRouter = require("./Routes/categoriesRouter.js");
const productsRouter = require("./Routes/productsRouter.js");
const usersRouter = require("./Routes/usersRouters.js");

const app = express();

app.get("/", (req, res) => {
  res.send("Gooner");
});

app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);
app.use("/login", usersRouter.loginRouter);
app.use("/register", usersRouter.registerRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log("listening on http://localhost:8080");
});
