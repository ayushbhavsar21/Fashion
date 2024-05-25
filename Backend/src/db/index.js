import mongoose from 'mongoose';

const connectDB = async()=>{
    try{

        await mongoose.connect(`${process.env.MONGODB_URI}/E-Commerce`);
        
        console.log("MongoDB is Connected!!");

    }catch(error){
        console.log("Error has occured while connecting to mongodb",error)
        process.exit(1);
    }
}

export default connectDB;
