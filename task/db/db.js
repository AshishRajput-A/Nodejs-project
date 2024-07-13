import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/task");
    console.log("mongodb connected successfully", conn.connection.host);
  } catch (error) {
    console.log("Error in mongodb connection", error);
  }
};

export default connectDB;
