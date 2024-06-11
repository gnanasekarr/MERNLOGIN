import  jwt  from "jsonwebtoken";
import { errorHandler } from "./error.js";



export const verifyToken  = (req, res, next) => {
    const token = req.cookies.accesstoken;

    if(!token) return next(errorHandler(401, 'You need to login'));

    jwt.verify(token, process.env.JWT_SCRET, (err, user) =>{
        if(err) return next(errorHandler(403, "Token is not valid"));

        req.user = user;
        next();
    });

};

