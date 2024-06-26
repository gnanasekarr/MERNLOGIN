import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs';

export const test = (req,res) =>{
    res.json({
        message:"api is working",
    });
};

//update user

export const updateUser = async (req, res, next) =>{
    if(req.user.id !== req.params.id){
        return next(errorHandler(401, "you can only update your account"));
    }
    try {
        if(req.body.password){
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }
        // console.log("password",req.body.password);
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set:{
                    username:req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    profilePictures: req.body.profilePictures,
                },
            },{new: true}
        );
        // console.log(req.params.body);
        const {password, ...rest} = updatedUser._doc;
        // console.log("after",rest);
        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
};

//delete user 

export const deleteUser = async(req,res,next) =>{
    if(req.user.id !== req.params.id){
        return next(errorHandler(401, 'Your can only delete your account!'));
    }
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been Deleted");
    } catch (error) {
        next(error);
    }
}