const mongoose = require("mongoose");

const PORT = process.env.PORT 
const URI = process.env.DB_URI;

async function connectDB() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Server Running on PORT: ${PORT}`);
  } catch (err) {
    console.log(err);
    //process.exit(1);
  }
}

module.exports = connectDB;
