import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);

    if (!process.env.NEXT_PUBLIC_MONGODB) return console.log("No URL defined in client side!");
    if (isConnected) return console.log("Already connected to DB!");

    try {

        await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB);
        isConnected = true;
        console.log("Connected to DB");

    } catch (e: any) {
        console.log("Error while connecting with MongoDB!", e.message);
    }
}