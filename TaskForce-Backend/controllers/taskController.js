exports.getAllTasks = (req, res) => {
  res.json({ message: "Here are all tasks (dummy)" });
};

exports.createTask = (req, res) => {
  const { title, status } = req.body;
  res.json({ message: "Task created (dummy)", data: { title, status } });
};

exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { title, status } = req.body;
  res.json({ message: `Task ${id} updated (dummy)`, data: { title, status } });
};

exports.deleteTask = (req, res) => {
  const { id } = req.params;
  res.json({ message: `Task ${id} deleted (dummy)` });
};
