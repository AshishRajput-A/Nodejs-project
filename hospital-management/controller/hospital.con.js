import { Hospital } from "../model/hospital.model.js";

const insertHospital = async (req, res) => {
  try {
    const data = new Hospital(req.body);

    const result = await data.save();
    res.status(200).send({ message: "successfully insert data", data: result });
  } catch (err) {
    console.log("Error in insert Hospital,:", err);
  }
};

export { insertHospital };
