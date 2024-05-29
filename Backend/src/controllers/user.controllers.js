import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResonse.js";
import { User } from "../models/user.model.js";
import emailValidator from 'email-validator';

const generateAccessAndRefreshToken = async(userId)=>{
    try {
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({validateBeforeSave: false});

        return {accessToken, refreshToken};

    } catch (error) {
        return res
        .status(500)
        .json(
            new ApiError(500, "Something went wrong while generating refresh and access token!!")
        );
    }
}

const registerUser = asyncHandler(async (req,res)=>{
 
    const {email, userName, password} = req.body;

    if( !email || !userName || !password ){
        return res
        .status(400)
        .json(
            new ApiError(400,"All fields are required!!")
        )
    }

    if (!emailValidator.validate(email)) {
        return res
        .status(400)
        .json(
            new ApiError(400,"Please enter a valid email address" )
        )
    }

    if(password.length<8){
        return res
        .status(400)
        .json(
            new ApiError(400, "Password must be greater than 8 character")
        )
    }

    const existedUser = await User.findOne({
        $or: [{email}, {userName}]
    })

    if(existedUser){
        return res
        .status(400)
        .json(
            new ApiError(400, "User with email or username already exists")
        )
    }

    const user = await User.create({
        email,
        password,
        userName,
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        return res
        .status(500)
        .json(
            new ApiError(500,"Something went wrong while resitering the User")
        )
    }

    const {accessToken, refreshToken} = await generateAccessAndRefreshToken(createdUser._id);
    
    const options = {
        httpOnly: true,
        secure: true
    };

    return res
    .cookie('accessToken', accessToken, options)
    .cookie('refreshToken', refreshToken, options)
    .status(201)
    .json(
        new ApiResponse(
            200,{
                user: createdUser, accessToken, refreshToken
            }, 
            "User Created Successfully!!")
    );
    
})

const logInUser = asyncHandler(async(req,res)=>{

    const {email, userName, password} = req.body;

    if(!userName && !email){ 
        return res
        .status(400)
        .json(
            new ApiError(400,"username or email is required!!")
        )
    }

    const user = await User.findOne({
        $or: [{email}, {userName}]
    })

    if(!user){
        return res
        .status(400)
        .json(
            new ApiError(
                400,
                "User not found"
            )
        )
    }

    if(!password){
        return res
        .status(401)
        .json(
            new ApiError(
                401,
                "Password is Required!!"
            )
        )
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if(!isPasswordValid){
        return res
        .status(401)
        .json(
            new ApiError(
                401,
                "Invalid Password!!"
            )
        )
    }


   const {accessToken, refreshToken} = await generateAccessAndRefreshToken(user._id);

   const loggedInUser = await User.findById(user._id) .select("-password -refreshToken");

   const options = {
     httpOnly: true,
     secure: true
   };

   return res.status(200)
   .cookie('accessToken', accessToken, options)
   .cookie('refreshToken', refreshToken, options)
   .json(
    new ApiResponse(
        200,
        {
            user: loggedInUser, accessToken, refreshToken
        },
        "User logged In Successfully!!"
    )
   )

})

const logOutUser = asyncHandler(async(req, res)=>{
    await User.findByIdAndUpdate(req.user._id, {
        $unset: {
            refreshToken: 1
        },
    },
    {
        new: true
    }
    );

    const options = {
        httpOnly: true,
        secure: true
    }

    return res.status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged Out!!"))
})

const currentUser = (async(req,res)=>{
    try {
        const userData = req.user;

        return res
        .status(200)
        .json(
            new ApiResponse(200, userData, "Current User Data!!")
        );

    } catch (error) {
        console.log(error);
    }
})


export {
    registerUser,
    logInUser,
    logOutUser,
    currentUser
};