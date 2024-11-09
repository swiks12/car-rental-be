const userModel = require("../Models/User");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

  const signup=async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        const user=await userModel.findOne({email});
        if(user){
            return res.status(400).json({message:"User already exists!"});
        }
        const salt=await bcrypt.genSalt(parseInt(process.env.SALT))
        const newUser=new userModel({name,email,password});
        newUser.password=await bcrypt.hash(password,salt);
        await newUser.save();
        res.status(201).json({message:"User Signup successfull!"})
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"});
        
    }
  };

  const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await userModel.findOne({email});
        if(!user){
            return res.status(400).json({message:"Invalid Email or Password"});
        }
        const isPassEqual=await bcrypt.compare(password,user.password);
        if(!isPassEqual){
            return res.status(400).json({message:"Invalid Email or Password"});
        }
        const jwtToken=jwt.sign({_id:user._id,email:user.email,},process.env.JWT_SECRET,{expiresIn:'24h'})

        res.status(201).json({message:"login successfull",token:jwtToken,role:user.role,userId:user._id})
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"});
    }
  };

  module.exports={signup,login}