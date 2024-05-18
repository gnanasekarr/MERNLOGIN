import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();
// mongoose.connect("mongodb+srv://mern:Mern@mern.azu3gur.mongodb.net/mern-auth?retryWrites=true&w=majority&appName=mern");

mongoose.connect(process.env.MONGO).then(() =>{
    console.log("connect t0 mongodb");
}).catch((err) =>{
    console.log(err);
});

const app = express();

app.use(express.json());

app.listen(3000,() =>{
    console.log("server listening 3000");
});

app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);

app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server error";

    return res.status(statusCode).json({
        success : false,
        error : message,
        statusCode :statusCode,
    });
});