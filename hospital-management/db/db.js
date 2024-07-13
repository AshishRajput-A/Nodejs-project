import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MongoURI);

    console.log("MongoDB Connection Successfully", conn.connection.host);
  } catch (error) {
    console.log("MongoDB connection Error", error);
  }
};

export default connectDB;
