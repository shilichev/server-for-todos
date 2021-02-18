let todos = [
  {
    id: "1",
    title: "Housework",
    description: "Wash dish, clean flat",
    status: "DONE",
  },
  {
    id: "2",
    title: "React",
    description: "Learn and understend main ideas of React/Redux",
    status: "DONE",
  },
  {
    id: "3",
    title: "Job",
    description: "Find interesting job with fair boss and good team",
    status: "TODO",
  },
];

module.exports.getListTodos = (req, res) => {
  res.status(200).json({
    todos,
  });
};

module.exports.addTodo = (req, res) => {
  todos = [req.body, ...todos];
  res.status(204).send();
};

module.exports.updateTodoById = (req, res) => {
  todos = todos.map((item) => {
    if (item.id === req.body.id) {
      return { ...item, ...req.body };
    }
    return item;
  });
  res.status(204).send();
};
module.exports.deleteTodoById = (req, res) => {
  todos = todos.filter((item) => item.id !== req.body.id);
  res.status(204).send();
};
