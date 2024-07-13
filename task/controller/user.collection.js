import User from "../model/user.model.js";

const insertUser = async (req, res) => {
  try {
    const { username, email } = req.body;

    const user = await User.create({ username, email });

    res.status(200).json({ message: "user insert successfully", data: user });
  } catch (error) {
    console.log("insert User error", errors);
  }
};

export { insertUser };
