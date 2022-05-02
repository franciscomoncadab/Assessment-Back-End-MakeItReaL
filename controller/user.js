const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const UserSchema = new Schema({
     username: {
          type: 'string',
          unique: true, 
          mach: [/.+\@.+\..+/, 'Ingrese un email valido'], // Validacion para el email
          required: true},
     password: {type: 'string', required: true},
     signUpDate: {type: Date, default: Date.now()},
     
});

UserSchema.pre('save', function (next) {
     let user = this

     if(!this.isModified('password')) return next()

     bcrypt.genSalt(10, (err, salt) => {
          if(err) return next(err)
          
          bcrypt.hash(user.password, salt, (err, hash) => {
               if(err) return next(err)
               user.password = hash
               next()
          })
     })
});

