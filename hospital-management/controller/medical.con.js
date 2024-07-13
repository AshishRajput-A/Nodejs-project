import { MedicalRecord } from "../model/medical_report.model.js";

const insertMedicalReport = async (req, res) => {
  try {
    const data = new MedicalRecord(req.body);

    const result = await data.save();

    res.status(200).send({ message: "successfull insert", data: result });
  } catch (error) {
    console.log("Error in insert Medical report ", error);
  }
};

const getReport = async (req, res) => {
  try {
    const data = await MedicalRecord.find({
      _id: req.body.report_id,
    }).populate("patientName");

    res.status(200).send({ message: "Successfully get data", data: data });
  } catch (error) {
    console.log("Error in get Doctor,:", error);
  }
};

export { insertMedicalReport, getReport };
