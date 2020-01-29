const express = require('express');

const userController = require('../controllers/users.controller');
const router = express.Router();

router.route('/')
    .get(userController.getUsers)
    .post(userController.postUser)

// router.route('/')
//     .post(userController.postUser);

router.route('/:id')
    .get(userController.getUser)
    .delete(userController.deleteUser)

module.exports = router;

