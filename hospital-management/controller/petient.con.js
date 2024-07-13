import { Patient } from "../model/patient.model.js";

const insertPatient = async (req, res) => {
  try {
    const data = new Patient(req.body);

    const result = await data.save();

    res.status(200).send({ message: "successfull insert", data: result });
  } catch (error) {
    console.log("Error in insert Patient ", error);
  }
};

const getPatient = async (req, res) => {
  try {
    const data = await Patient.find({ _id: req.body.patient_id }).populate(
      "admittedIn"
    );

    res.status(200).send({ message: "Successfully get data", data: data });
  } catch (error) {
    console.log("Error in get Doctor,:", error);
  }
};

export { insertPatient, getPatient };
