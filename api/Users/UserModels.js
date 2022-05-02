const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const User = new mongoose.Schema({
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
     signUpDate: {
          type: Date,
          default: Date.now()},
     
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

/*UserSchema.methods.comparePassword = async function (password) {
     return await bcrypt.compare(password, this.password)
}

UserSchema.methods.validatePassword = async function (password) {
     return await bcrypt.validate(password)
}*/

module.exports = mongoose.model('User', User);