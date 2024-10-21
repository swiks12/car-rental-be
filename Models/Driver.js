const { required } = require("joi");
const mongoose=require("mongoose");


const driverSchema=mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true,},
    contact:{type:Number,required:true,unique:true},
    image:{public_id:{type:String,required:true},url:{type:String,required:true}},
    isbooked:{type:Boolean,default:false},
    // bookings:{type:mongoose.Schema.Types.ObjectId,ref:'Booking'}
})

const driverModel=mongoose.model('drivers',driverSchema);


module.exports=driverModel;