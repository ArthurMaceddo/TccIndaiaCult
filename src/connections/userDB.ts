import mongoose from "mongoose";

const connectUserDB = async () => {
  try {
    const uri = process.env.MONGODB_URI || "mongodb+srv://bruno35418:indaiacult@indaiacult.hdajmzg.mongodb.net/"
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`fudeu no userDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectUserDB;