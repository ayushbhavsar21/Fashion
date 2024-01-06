import { asyncHandler } from "../utils/asyncHandler";
import { User } from "../models/user.models";

const registerUser = asyncHandler(async(req,res)=>{

    const {email, userName, password} = req.body;

    const existedUser = await User.findOne({email});


});

const logInUser = asyncHandler(async(req,res)=>{

});

export {
    registerUser,
    logInUser
};