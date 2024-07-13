import Todo from "../model/alltodo.model.js";

const insertMainTodo = async (req, res) => {
  try {
    const data = new Todo(req.body);

    const result = await data.save();

    res
      .status(200)
      .json({ message: "mainTodo insert successfully", data: result });
  } catch (error) {
    console.log("Error in insert main todo", error);
  }
};

const getMainTodo = async (req, res) => {
  const data = await Todo.find({ _id: req.body.todos_id }).populate([
    "createdBy",
    "subTodos",
  ]);

  res
    .status(201)
    .json({ message: "main todo fetched successfully", data: data });
};

export { insertMainTodo, getMainTodo };
