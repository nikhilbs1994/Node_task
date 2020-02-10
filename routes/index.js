'use strict';

const userCtrl = require('../controller/user.controller.js');
const user = new userCtrl();
const router = require('express').Router();

router.post('/user', user.makeUser);

module.exports = router;