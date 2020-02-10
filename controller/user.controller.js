'use strict';
const userService = require('../service/user.service.js');
const userSrvc = new userService();
class user {
    makeUser(req, res) {
        return userSrvc.createUser(req.body).then(function () {
            res.status(200).send("Successfully Updated");
        }, function (err) {
            res.status(500).send(err);
        });
    }
}

module.exports = user;