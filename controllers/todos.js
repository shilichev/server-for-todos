let todos = [
  {
    id: "1",
    title: "Help",
    description: "This description about help",
    status: "DONE",
  },
  {
    id: "2",
    title: "News",
    description: "This description all about news",
    status: "TODO",
  },
  {
    id: "3",
    title: "Interestings",
    description: "This description about interestings",
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
