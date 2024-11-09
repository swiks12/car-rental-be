const mongoose=require("mongoose");


const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String,default:"user"},
    isVerfied:{type:Boolean,default:false},
    imagePassport:{public_id:{type:String,required:true},url:{type:String,required:true}},
    image:{public_id:{type:String,required:true},url:{type:String,required:true}},
});


const userModel=mongoose.model('users',userSchema);
module.exports=userModel;