import express from "express";
import {
  insertData,
  getAllData,
  getDataByid,
  updateData,
  deleteData,
} from "../controller/user.controller.js";

const router = express.Router();

router.get("/about", (req, res) => {
  res.send("<h1>This is about page 😊😊 </h1>");
});

router.get("/contact", (req, res) => {
  res.send("<h1>This is contact page 📞📞 </h1>");
});

// insert data

router.post("/insert", insertData);

//get all data

router.get("/getalldata", getAllData);

//get data by name

router.get("/getdata/:id", getDataByid);

//update data

router.patch("/update/:id", updateData);

//delete data

router.delete("/delete/:id", deleteData);

export default router;
