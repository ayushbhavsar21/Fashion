import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResonse.js";
import { Seller } from "../models/seller.model.js";

const generateAccessAndRefreshToken = async(userId)=>{
    try {
        const user = await Seller.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({validateBeforeSave: false});

        return {accessToken, refreshToken};

    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating refresh and access token!!");
    }
}

const registerSeller = asyncHandler(async (req,res)=>{
 
    const {email, userName, password} = req.body;

    if(
        [userName, email, password].some(field=>{
            field?.trim()=== ""
        })
    ){
        throw new ApiError(400,"All fields are required!!")
    }

    const existedSeller = await Seller.findOne({
        $or: [{email}, {userName}]
    })

    if(existedSeller){
        throw new ApiError(400, "User with email or username already exists")
    }

    const user = await Seller.create({
        email,
        password,
        userName
    })

    const createdUser = await Seller.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new ApiError(500, "Something went wrong while resitering the User");
    }
    
    return res.status(201).json(
        new ApiResponse(200, createdUser, "User Created Successfully!!")
    );
})

const logInSeller = asyncHandler(async(req,res)=>{

    const {email, userName, password} = req.body;

    if(!userName && !email){ 
        throw new ApiError(400, "username or email is required!!");
    }

    const user = await Seller.findOne({
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

   const loggedInUser = await Seller.findById(user._id) .select("-password -refreshToken");

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

const logOutSeller = asyncHandler(async(req, res)=>{
    await Seller.findByIdAndUpdate(req.user._id, {
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
    registerSeller,
    logInSeller,
    logOutSeller
};