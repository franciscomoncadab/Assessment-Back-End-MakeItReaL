const {Router} = require('express')
const {createUser, Login, getAllUsers} = require('./User.controller')

const router = Router();

router.post('/', createUser);
router.post('/login', Login);
router.get('/', getAllUsers);

module.exports = router;