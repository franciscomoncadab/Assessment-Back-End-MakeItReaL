const express = require("express");
const expressConfig = require("./config/express");
const connectDB = require("./config/db");
const routes = require("./routes");

const app = express();

expressConfig(app);
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  connectDB();
  routes(app);
  console.log(`Server running on PORT ${PORT}`);
});

module.exports = app;
