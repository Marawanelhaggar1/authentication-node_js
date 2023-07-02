const uid = require("uid");
const auth = require("../authentication.js");

let user = [];
exports.find = (email) => {
  return user.find((u) => u.email == email);
};

exports.addUser = (u) => {
  u.id = uid.uid();
  if (exports.find(u.email)) {
    return "this email already exists";
  } else {
    delete u.passwordRepeat;
    u.token = auth.generateToken({ email: u.email });
    user.push(u);
    return { ...u, status: "success" };
  }
};

exports.checkUser = (u) => {
  const findUser = exports.find(u.email);
  if (findUser === undefined || findUser.password !== u.password) {
    return "invalid eamil or password";
  }

  return findUser;
};
