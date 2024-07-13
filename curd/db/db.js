import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGOURI);

    console.log("Mongodb connected successfully", conn.connection.host);
  } catch (error) {
    console.log("Error in mongodb connection", error);
  }
};

export default connectDB;
