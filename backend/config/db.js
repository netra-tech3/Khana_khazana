import mongoose from "mongoose";

 export const connectDB = async () =>
    {
        await mongoose.connect('//your database').then(()=>
            console.log("DB connected")
        );
    }
