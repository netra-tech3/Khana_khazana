import mongoose from "mongoose";

 export const connectDB = async () =>
    {
        await mongoose.connect('mongodb+srv://netrapalsingh7256:yuvrajsingh2007@cluster0.txaqgvi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>
            console.log("DB connected")
        );
    }