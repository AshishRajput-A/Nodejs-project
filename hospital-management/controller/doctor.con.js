import { Doctor } from "../model/doctor.model.js";

const insertDoctor = async (req, res) => {
  try {
    const data = new Doctor(req.body);

    const result = await data.save();
    res.status(200).send({ message: "successfully insert data", data: result });
  } catch (error) {
    console.log("Error in insert Doctor,:", error);
  }
};

const getDoctors = async (req, res) => {
  try {
    const data = await Doctor.find({ _id: req.body.doctor_id }).populate(
      "worksInHospitals"
    );

    res.status(200).send({ message: "Successfully get data", data: data });
  } catch (error) {
    console.log("Error in get Doctor,:", error);
  }
};

export { insertDoctor, getDoctors };
