const router = require('express').Router();
const { FetchUser, AddUser } = require('./controller');
// const User = require('./model');

router.get('/get', FetchUser);

router.post('/post', AddUser);


module.exports = router;