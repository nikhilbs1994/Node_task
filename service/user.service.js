'use strict';
const mongoose = require('mongoose');

const User = mongoose.model('User', require('../schema/user.schema.js'));
const UserRole = mongoose.model('UserRole', require('../schema/userRole.schema.js'));
const error = {
    code: 1001,
    msg: "Internal Error"
}

class userService {
    createUser(userDetails) {
        const user = new User(userDetails);
        return user.save().then(function(user) {
            return UserRole.estimatedDocumentCount({}, function (err, count) {
                if (err) return error;
                let roleId = (count > 0) ? 1 : 2;
                const userRole = new UserRole({
                    userId: user._id,
                    role: roleId
                });
                return userRole.save().then(null,function (err) {
                    if (err) return error;
                });
            });
        }, function (err) {
            if (err) return error;
        });
    };
}

module.exports = userService;