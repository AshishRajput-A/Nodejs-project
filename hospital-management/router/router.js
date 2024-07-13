import { Router } from "express";
import { insertDoctor, getDoctors } from "../controller/doctor.con.js";
import { insertHospital } from "../controller/hospital.con.js";
import { getReport, insertMedicalReport } from "../controller/medical.con.js";
import { getPatient, insertPatient } from "../controller/petient.con.js";

const router = Router();

router.get("", (req, res) => {
  res.send("<h1>This is home page 🏠🏠🏠</h1>");
});

router.post("/doctor/insert", insertDoctor);
router.get("/get/doctor", getDoctors);

router.post("/hospital/insert", insertHospital);

router.post("/report/insert", insertMedicalReport);
router.get("/get/report", getReport);

router.post("/petient/insert", insertPatient);
router.get("/get/patient", getPatient);

export default router;
