import { Schema, model } from "mongoose";

const userSchema = new Schema({

}, {timestamps: true});

export const User = model("User", userSchema);
