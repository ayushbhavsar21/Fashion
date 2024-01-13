import { Router } from "express";
import { logInBuyer, logOutBuyer, registerBuyer } from "../controllers/buyer.controllers.js";
import { registerSeller, logInSeller, logOutSeller } from "../controllers/seller.controllers.js";
import { verifySellerJWT } from "../middlewares/sellerAuth.middleware.js";
import { verifyBuyerJWT } from "../middlewares/buyerAuth.middleware.js";

const userRouter = Router();

//Register
userRouter.route("/register/buyer").post(registerBuyer)
userRouter.route("/register/seller").post(registerSeller)

//Login
userRouter.route("/login/buyer").post(logInBuyer)
userRouter.route("/login/seller").post(logInSeller)

//Logout
userRouter.route("/logout/buyer").post(verifyBuyerJWT, logOutBuyer);
userRouter.route("/logout/seller").post(verifySellerJWT, logOutSeller);

export default userRouter;