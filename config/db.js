import mongoose from 'mongoose'
import dotenv from "dotenv"

dotenv.config();

const connectDB=async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })
    } catch (error) {
        console.log("Database connection Faild!",error.message)
        process.exit(1);
    }
}

export default connectDB;