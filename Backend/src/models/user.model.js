import {Schema, model} from 'mongoose'

const userSchema = new Schema({
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

export const User = model("User", userSchema)