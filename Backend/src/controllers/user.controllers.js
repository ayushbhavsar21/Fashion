import { asyncHandler } from "../utils/asyncHandler";
import { User } from "../models/user.models";
import { ApiError } from "../utils/ApiError";

const registerUser = asyncHandler(async(req,res)=>{

    const {email, userName, password} = req.body;

    const existedUser = await User.findOne({
        $or: [{email}, {userName}]
    });

    if( [userName, email, fullName, password].some(field=>{
        field?.trim()=== ""}))
    {
        throw new ApiError(400, "All fields are required!!");
    }

    if(existedUser){
        throw new ApiError(400, "User is already Existed!!");
    }

    const user = await User.create({
        userName: userName.toLowerCase(),
        email: email.toLowerCase(), 
        password
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
    
    if(!createdUser){
        throw new ApiError(500, "Something went wrong while resitering the User");
    }
    
    return res.status(201).json(
        new ApiResponse(200, createdUser, "User Created Successfully!!")
    );

});

const logInUser = asyncHandler(async(req,res)=>{
    
});

export {
    registerUser,
    logInUser
};