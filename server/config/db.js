import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Connected Sucessfully!!");
    } catch (error) {
        console.error(error);
    }
}

export default connectMongoDB;