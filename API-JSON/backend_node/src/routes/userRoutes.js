const express = require('express');
const router = express.router();
const userController = require("../controllers/userController");

router.get('/', userController.getUsers)
router.get('/', userController.getUsersById)
// router.post ('/', userController.createUsers);
// router.put ('/:id', userController.updateUsers);
// router.delete ('/:id', userController.delateUsers);

module.exports = router