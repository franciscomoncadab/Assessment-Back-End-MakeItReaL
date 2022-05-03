const FavsList = require("./api/Favs/");
const Users = require("./api/Users/");
const isAuth = require("./middleware/auth");

function routes(app) {
  app.use("/api/favs", isAuth, FavsList);
  app.use("/auth/local/", Users);
  //app.use("/users", Users);
}

module.exports = routes;