import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGODB_URL);

    console.log("Database Connection :- ", connection.host);
  } catch (error) {
    console.error("Database Connection Error");
  }
};

export default connectDB;
