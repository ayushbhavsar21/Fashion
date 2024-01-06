import { Router } from "express";
import { logInUser, logoutUser, registerUser } from "../controllers/user.controllers.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.route("/register").post(registerUser);
userRouter.route("/login").post(logInUser);

userRouter.route("/logout").post(verifyJWT, logoutUser);

export default userRouter;