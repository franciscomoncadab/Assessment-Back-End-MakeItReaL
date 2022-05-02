const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = new mongoose.Schema({
     email: { 
          type: String,
          required: true,
          unique: true,
          
     },
     password: {
          type: String,
          required: true,
          minLength: 6,
     }
});

User.pre('save', async function (next) {
     if (!this.isModified("password")) return next();
     const salt = await bcrypt.genSalt(10)
     this.password = await bcrypt.hash(this.password, salt)
});

User.post("save", function (err, doc, next) {
     next(err.code === 11000 ? new Error("Email ya ha sido registrado"): err) //
});

/*User.methods.jwt = function () {
     return jwt.sign({ id: this._id}, process.env. {
          expiresIn: process.env.,
     });

}*/

module.exports = mongoose.model('User', User);