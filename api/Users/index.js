const {Router} = require('express')
const {createUser, login} = require('./User.controller')

const router = Router();

router.post('/', createUser);
router.post('/login', login);

module.exports = router;