import validator from "validator";
import bcrypt from "bcrypt";
import express from "express";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Route for user login
const loginUser = async (req, res) => {

    try {
        
            const {email, password} = req.body;
            const user = await userModel.findOne({email});

            if(!user){
                return res.json({success:false,  message:"user does't exists"});

            }
            const isMatch = await bcrypt.compare(password,user.password)

            if(isMatch){
                const token = createToken(user._id)
                res.json({success:true, token})
            }
            else{
                res.json({success:false, message: "Invalid credentials "})
            }



    } catch (error) {
        console.log(error);
    res.json({ success: false, message: error.message });
    }


}

// Route for user register

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // checking user already exixts or not

    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "user already exists" });
    }

    //  validating email format & strong password

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Invalid email format" });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password must be at least 8 characters long",
      });
    }

    //----hashing password

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // creating user
    const newUser = new userModel({
      name,
      email,
      password: hashPassword,
    });

    // saving user
    const user = await newUser.save();

    const token = createToken(user._id);

    res.json({ success: true,token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Route for admin login
const adminLogin = async (req, res) => {
           
    try {

        const {email,password} = req.body;
         
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
             const token = jwt.sign(email+password,process.env.JWT_SECRET);
             res.json({success:true,token})
        }
        else{
            res.json({success:false,message:"Invalid Credentials"})
        }

        
    } catch (error) {
        
         console.log(error);
    res.json({ success: false, message: error.message });
    }

};

const getUserProfile = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await userModel.findById(userId).select('-password -cartData');
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    res.json({ success: true, user });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { loginUser, registerUser, adminLogin, getUserProfile };
