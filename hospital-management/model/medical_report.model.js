import mongoose, { mongo } from "mongoose";

const medicalRecordSchema = new mongoose.Schema(
  {
    patientName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },

    report: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const MedicalRecord = mongoose.model(
  "MedicalRecord",
  medicalRecordSchema
);
