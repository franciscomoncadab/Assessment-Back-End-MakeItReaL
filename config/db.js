const mongoose = require('mongoose')

let connectionDB
async function connectDB() {
     if (connectionDB) return
     const URI = process.env.DB_URI

     connectionDB = mongoose.connectionDB

     await mongoose.connectionDB(URI)
}     