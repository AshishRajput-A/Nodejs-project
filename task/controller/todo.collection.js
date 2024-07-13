import SubTodo from "../model/todo.model.js";

const insertTodo = async (req, res) => {
  try {
    const data = new SubTodo(req.body);

    const reault = await data.save();

    res.status(200).json({ message: "Insert TODO successfully", data: reault });
  } catch (error) {
    console.log("Insert Todo error", error);
  }
};

const gettodo = async (req, res) => {
  try {
    const getdata = await SubTodo.find({ _id: req.body.todo_id }).populate(
      "createdBy"
    );

    res.status(202).json({ message: "data get successfully", data: getdata });
  } catch (error) {
    console.log("Error of fetching Todo", error);
  }
};

export { insertTodo, gettodo };
