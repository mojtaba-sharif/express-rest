const userService = require('../services/user.service');

const post = function (req, res, next) {
        console.log(req.body);
        return userService.post(req.body).then(user => res.json(user)).catch(err => {
            res.statusCode = 500;
            res.json(err);
        });
    }
;

const put = function (req, res, next) {
    return userService.put(req.params.id, req.body).then(user => res.json(user)).catch(err => res.statusCode(500).json(err));
};

const deleteById = function (req, res, next) {
    return userService.deleteById(req.params.id).then(res.statusCode(200)).catch(res.statusCode(500))
};

const findById = function (req, res, next) {
    console.log(req.params.id);
    return userService.findById(req.params.id)
        .then(user => {
            res.json(user)
        });
};

const find = function (req, res, next) {
    return userService.find()
        .then(user => {
            res.json(user);
        });
};
module.exports.post = post;
module.exports.put = put;
module.exports.deleteById = deleteById;
module.exports.findById = findById;
module.exports.find = find;
