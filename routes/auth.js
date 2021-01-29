const express = require("express");
const router = express.Router();
const controller = require("../controllers/todos");
router.get("/todos", controller.todos);

module.exports = router;
