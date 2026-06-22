import mongoose from "mongoose";
import config from "../config/config";

if (!config.MONGO_URI) {
    throw new Error("MONGO_URI is not defined");
}

const connectDb = async(): Promise<void> =>{
    try {
        console.log("Trying MongoDB connection");
        await mongoose.connect(`${config.MONGO_URI}/ThinkBoard`);
        console.log("ThinkBoard DB is connected");
    } catch (error) {
        console.log("Db not connected");
        console.error("DB Connection Error:", error);
        process.exit(1);
    }
}

export default connectDb;   