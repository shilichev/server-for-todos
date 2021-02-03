const express = require("express");
const router = express.Router();
const {
  getListTodos,
  addTodo,
  updateTodoById,
} = require("../controllers/todos");

router.get("/", getListTodos);
router.post("/", addTodo);
router.put("/", updateTodoById);
router.delete("/", deleteTodoById);

module.exports = router;
