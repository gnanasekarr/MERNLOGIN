import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
// mongoose.connect("mongodb+srv://mern:Mern@mern.azu3gur.mongodb.net/mern-auth?retryWrites=true&w=majority&appName=mern");

mongoose.connect(process.env.MONGO).then(() =>{
    console.log("connect t mongodb");
}).catch((err) =>{
    console.log(err);
});

const app = express();

app.listen(3000,() =>{
    console.log("server listening 3000");
});