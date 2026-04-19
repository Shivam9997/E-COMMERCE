import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {type:String ,required:true},
    email: {type:String ,required:true , unique:true},
    password: {type:Number ,required:true},
    cartData: {type: Object, default: {}},
}, {minimize: false});

const usermodel = mongoose.model("user", userSchema)

export default userModel;