const express = require('express');
const userRouter = express.Router();

const { getUser, updateUser, deleteUser } = require('../Controllers/users');

userRouter
// .get('/', getUser)
// .post('/', createUser)
.patch('/:id', updateUser)
.delete('/:id', deleteUser)

module.exports = {userRouter};