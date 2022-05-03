const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
     email: {
          type: 'string',
          unique: true, 
          mach: [/.+\@.+\..+/, 'Ingrese un email valido'], // Validacion para el email
          required: true,
          trim: true,
          lowercase: true,
     },
     password: {
          type: 'string',
          required: true,
          trim: true,
          minLength: [6, 'Password should have a min of 6 characters'],
     },
});

UserSchema.pre("save", async function () {
     const salt = await bcrypt.genSalt(10);
     const hash = await bcrypt.hash(this.password, salt);
     this.password = hash;
   });
   

module.exports = mongoose.model('User', UserSchema);