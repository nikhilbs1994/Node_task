'use strict';
const userService = require('../service/user.service.js');
const userSrvc = new userService();
class user {
    makeUser(req, res) {
        if(Object.keys(req.body).length === 0) {
            res.status(400).send("Invalid Input");
        } else {
            return userSrvc.createUser(req.body).then(function () {
                res.status(200).send("Successfully Updated");
            }, function (err) {
                res.status(500).send(err);
            });
        }
    }
}

module.exports = user;