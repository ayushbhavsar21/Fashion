import express from 'express'
import cors from 'cors'
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

//routes
import userRouter from './routes/user.routes.js';
import productRouter from './routes/product.routes.js';
import orderRouter from './routes/order.routes.js';

app.use("/api/v1/users", userRouter);
app.use("/api/v1/products",productRouter);
app.use("/api/v1/orders", orderRouter);

export {app, port}