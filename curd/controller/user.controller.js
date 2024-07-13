import User from "../model/user.model.js";

const insertData = async (req, res) => {
  try {
    const data = new User(req.body);

    if (!data) {
      throw console.log("Data is never get");
    }

    const saveData = await data.save();

    res.status(201).json({
      success: true,
      message: "data insert Successfully",
      data: saveData,
    });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, message: "Error to insert data in DB" });
  }
};

const getAllData = async (req, res) => {
  try {
    const data = await User.find({});

    res.status(200).send(data);
  } catch (error) {
    res.status(400).json({ success: false, message: "Error to get all data" });
  }
};

const getDataByid = async (req, res) => {
  try {
    const _id = req.params.id;

    const data = await User.findById({ _id });

    res.status(201).json(data);

    if (!data) {
      res.status(404).json({
        success: false,
        message: "No data avaliable beyound given id.",
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error to get data by ID" });
  }
};

const updateData = async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await User.findByIdAndUpdate(_id, req.body, { new: true });
    res.status(200).json({
      success: true,
      data: data,
      message: "Data updated successfully.",
    });
  } catch (error) {
    res.status(500).json({ message: "Error to update data" });
  }
};

const deleteData = async (req, res) => {
  try {
    const data = await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      data: data,
      message: "Data deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({ message: "Error to delete data" });
  }
};

export { insertData, getAllData, getDataByid, updateData, deleteData };
