import express from 'express'
import cors from 'cors'
import userRouter from './routes/user.routes.js';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true
}))

app.use(cookieParser());

app.use(express.json({limit:"16kb"}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

app.use("/api/v1/users", userRouter);

export {app, port}