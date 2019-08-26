const express = require('express');

const userController = require('../controllers/users.controller');
const router = express.Router();

router.get('/', userController.getUsers);
    // .post(userController.postUsers)

router.route('/:id')
    .get(userController.getUser)
    .post(userController.postUser)
//     .delete(userController.deleteUser)
//     .put(userController.putUser)

module.exports = router;

