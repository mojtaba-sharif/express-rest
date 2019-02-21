const express = require('express');
const router = express.Router();
const middleware = require('../middleware/custom.middleware');
const UserController = require('../controllers/user.controller');
const path = require('path');


//users
router.get('/users', UserController.find);
router.get('/users/:id', UserController.findById);
router.post('/users', UserController.post);
router.put('/users/:id', UserController.put);
router.delete('/users/:id', UserController.deleteById);
module.exports = router;
