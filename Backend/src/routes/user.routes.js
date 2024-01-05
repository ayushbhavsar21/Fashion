import { Router } from "express";
import { logInUser, registerUser } from "../controllers/user.controllers.js";

const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", logInUser);

export default userRouter;