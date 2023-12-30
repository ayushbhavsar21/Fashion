import dotenv from 'dotenv'
import connectDB from './db/index.js';
import { app,port } from './app.js';

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(port , ()=>{
        console.log(`Server is running at: http://localhost:${port}`)
    })
})
.catch((error)=>{
    console.log(error);
})