import jwt  from "jsonwebtoken";
import { errorHandler } from "./error.js";



export const verifyToken = (req,res,next) =>{
    const token = req.cookies.token;

    if(!token)  return next(errorHandler(401, "Access denied"));

    jwt.verify(token, process.env.JWT_SCRET, (error, user) =>{
        if(error )  return next(errorHandler(403, "Token is invalid"));
        req.user = user;
        next();

    });

}