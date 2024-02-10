import { Router } from "express";
import { registerUser, logInUser, logOutUser, currentUser } from "../controllers/user.controllers.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

//Register
router.route("/register").post(registerUser)

//Login
router.route("/login").post(logInUser)

//Logout
router.route("/logout").post(verifyJWT, logOutUser)

//CurrentUser
router.route("/user").get(verifyJWT, currentUser)

export default router;