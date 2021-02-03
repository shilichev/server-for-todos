const express = require("express");
const bodyParser = require("body-parser");
const {
  getListTodos,
  addTodo,
  updateTodoById,
} = require("./controllers/todos");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/todos", getListTodos);
app.put("/todos", updateTodoById);
app.post("/todos", addTodo);
app.delete("/todos", deleteTodoById);

module.exports = app;
