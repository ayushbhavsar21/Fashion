import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResonse.js";
import { Buyer } from "../models/buyer.model.js";
import { Seller } from "../models/seller.model.js";

const generateAccessAndRefreshToken = async(userId)=>{
    try {
        const user = await Buyer.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({validateBeforeSave: false});

        return {accessToken, refreshToken};

    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating refresh and access token!!");
    }
}

const registerBuyer = asyncHandler(async (req,res)=>{
 
    const {email, userName, password} = req.body;

    if(
        [userName, email, password].some(field=>{
            field?.trim()=== ""
        })
    ){
        throw new ApiError(400,"All fields are required!!")
    }

    const existedBuyer = await Buyer.findOne({
        $or: [{email}, {userName}]
    })

    if(existedBuyer){
        throw new ApiError(400, "User with email or username already exists")
    }

    const user = await Buyer.create({
        email,
        password,
        userName
    })

    const createdUser = await Buyer.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new ApiError(500, "Something went wrong while resitering the User");
    }
    
    return res.status(201).json(
        new ApiResponse(200, createdUser, "User Created Successfully!!")
    );
})

const logInBuyer = asyncHandler(async(req,res)=>{

    const {email, userName, password} = req.body;

    if(!userName && !email){ 
        throw new ApiError(400, "username or email is required!!");
    }

    const user = await Buyer.findOne({
        $or: [{email}, {userName}]
    })

    if(!user){
        throw new ApiError(404, "User doesn't exist!!");

    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if(!isPasswordValid){
        throw new ApiError(401,"Invalid Password!!");
    }

   const {accessToken, refreshToken} = await generateAccessAndRefreshToken(user._id);

   const loggedInUser = await Buyer.findById(user._id) .select("-password -refreshToken");

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

const logOutBuyer = asyncHandler(async(req, res)=>{
    await Buyer.findByIdAndUpdate(req.user._id, {
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


export {
    registerBuyer,
    logInBuyer,
    logOutBuyer
};