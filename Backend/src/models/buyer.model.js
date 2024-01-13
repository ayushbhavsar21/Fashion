import {Schema, model} from 'mongoose'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const buyerSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true, 
    index: true
  },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    lowecase: true, 
    trim: true,  
  }, 
  password: {
    type: String,
    required: [true, "Password is required!!"],
  },
  refreshToken: {
    type: String
  },
},{timestamps: true})

buyerSchema.pre("save", async function (next) {
  if(!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10)
  next()
})

buyerSchema.methods.isPasswordCorrect = async function(password){
  return await bcrypt.compare(password, this.password);
}

buyerSchema.methods.generateAccessToken = function(){
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

buyerSchema.methods.generateRefreshToken = function(){
  return jwt.sign({
    _id: this._id,
  },
    process.env.REFRESH_TOKEN_SECRET,
  {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY
  })
}

export const Buyer = model("Buyer", buyerSchema)