import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import GoogleStrategy from 'passport-google-oauth2';

// Initialize express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware setup
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true
}));

app.use(cookieParser());
app.use(express.json({ limit: "16kb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Passport Google OAuth setup
passport.use('google', 
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID, 
        clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        callbackURL: "http://localhost:5173/auth/google/",
        userProfileURL: "http://www.googleapis.com/oauth2/v3/userinfo",
    }, async (accessToken, refreshToken, profile, cb) => {
        console.log(profile);
        // Handle profile information here
        cb(null, profile);
    })
);

// Google OAuth authentication route
app.get("http://localhost:5173/auth/google", passport.authenticate("google", {
    scope: ["profile", "email"],
}));

// Routes
import userRouter from './routes/user.routes.js';
import productRouter from './routes/product.routes.js';
import orderRouter from './routes/order.routes.js';

app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/orders", orderRouter);

export { app, port };
