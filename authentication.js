const jwt = require("jsonwebtoken");
const user = require("./Models/user.js");

const secretKey = "Gooner";

exports.generateToken = (user) => {
  const token = jwt.sign(user, secretKey);
  return token;
};

exports.verify = (req, res, next) => {
  try {
    const [_, token] = req.headers.authorization?.split(" ");
    const decoded = jwt.verify(token, secretKey);
    if (!user.find(decoded.email)) throw "user not found";

    next();
  } catch (error) {
    res.send("Not Authenticated");
  }
};
