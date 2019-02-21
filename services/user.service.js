const userModel = require('../models/user.model');
const post = function (user) {
    return userModel.create(user).then(user => {
        if (user)
            return user;
    });
};

const put = function (id, data) {
    return userModel.sync()
        .then(() => userModel.findById(id))
        .then(user => {
            if (user)
                return user.update(data);
        });
};

const findById = function (id) {
    return userModel.findById(id)
        .then(user => {
            if (user)
                return user;
        });
};


const find = function () {
    return userModel.findAll()
        .then(users => {
            if (users)
                return users;
        });
};

const deleteById = function (id) {
    return userModel.sync()
        .then(() => userModel.findById(id))
        .then(user => {
            if (user)
                return user.destroy();
        });
};

module.exports.post = post;
module.exports.put = put;
module.exports.findById = findById;
module.exports.find = find;
module.exports.deleteById = deleteById;

