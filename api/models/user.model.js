import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique: true,
    },
    email:{
        type:String,
        required:true,
        unique: true,
    },
    password:{
        type:String,
        required:true,
    },
    profilePictures:{
        type: String,
        default : 
        "https://imgs.search.brave.com/BAzw_kMPgqSqUN6KEZ4ukJOUaSD7RJh8yzINlWmRNg0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ibGFjay13aGl0/ZS1pbWFnZS1tYW4t/cy1oZWFkLXJvdW5k/LWJhY2tncm91bmRf/NzQ1NTI4LTE3MTcz/LmpwZw",
    },
},{timestamps:true});

const User = mongoose.model('User',userSchema);

export default User;