import { Schema, model } from "mongoose"

const userSchema = new mongoose.Schema({
    userName: {
      type: String,
      unique: true,
      required: [true, "Username is required!!"],
      lowercase: true
    },
    email: {
      type: String,
      required: [true, "Email is required!!"],
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: [true, "Password is required!!"],
    }
  },{timestamps: true})
  
  export const User = mongoose.model("User", userSchema)