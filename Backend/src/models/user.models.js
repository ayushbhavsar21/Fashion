import {Schema, model} from 'mongoose'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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

userSchema.pre("save", async function(next){
  if(this.isModified("password")){
    this.password = await bcrypt(this.password, 10);
    next();
  }
  else{
    next();
  }
})

userSchema.methods.isPasswordCorrect = async function(password){
  return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function(){
  return jwt.sign({
    _id: this._id,
    email: this.email,
    userName: this.userName,
    password: this.password
  },
    process.env.ACCESS_TOKEN_SECRET,
  {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY
  })
}

userSchema.methods.generateRefreshToken = async function(){
  return jwt.sign({
    _id: this._id,
  },
    process.env.ACCESS_TOKEN_SECRET,
  {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY
  })
}

export const User = model("User", userSchema)