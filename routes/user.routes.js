const express = require('express');
const { verifyToken } = require('../middleware/verifyToken.service');
const { getUserById, updateUserById } = require('../controllers/user.controller');

const router = express.Router();

router.get('/getUser/:id', verifyToken, getUserById);
router.patch('/updateUser/:id', verifyToken, updateUserById);


module.exports = router;