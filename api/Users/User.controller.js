require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./UserModels')

async function createUser(req, res) {
     const {email, password} = req.body;

     try {
          const newUser = await User.create({ email, password });
          res.status(200).json(newUser);
     } catch (err) {
          res.status(400).json({ err });
     }
};

async function Login(req, res) {
     const {email, password} = req.body;

     const user = await User.findOne({ email })
     const checkPassword = await bcrypt.compare(password, user.password);

     if (user && checkPassword) {
          const token = jwt.sign({ id: user._id, email}, process.env.JWT_KEY_SECRET, {
          expiresIn: '2h'},
          );
          res.status(200).json({token});
     } else {
          res.status(401).send({message: 'Invalid credentials'})
     }
};

async function getAllUsers(req, res) {
     const Users = await User.find()
     res.status(200).json(Users);
};

module.exports = {
     createUser,
     Login,
     getAllUsers
}