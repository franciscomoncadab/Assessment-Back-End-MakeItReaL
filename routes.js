const favsList = require("./api/favs");
const user = require("./api/user");
const isAuth = require("./middlewares/auth");

const routes =(app) => {
  app.use("/api/favs", isAuth, favsList);
  app.use("/auth/local", user);
}

module.exports = routes;