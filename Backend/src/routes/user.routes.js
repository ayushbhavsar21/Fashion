import { Router } from "express";
import { registerUser, logInUser, logOutUser } from "../controllers/user.controllers.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const userRouter = Router();

//Register
userRouter.route("/register").post(registerUser)

//Login
userRouter.route("/login").post(logInUser)

//Logout
userRouter.route("/logout").post(verifyJWT, logOutUser)

export default userRouter;