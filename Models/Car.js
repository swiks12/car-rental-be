const { required } = require("joi");
const mongoose= require("mongoose");
const driverModel = require("./Driver");


const carSchema=mongoose.Schema({
    brand:{type:String,required:true},
    model:{type:String,required:true},
    year:{type:Number,required:true},
    fuelType:{type:String,required:true},
    transmissionType:{type:String,required:true},
    seatingCapacity:{type:Number,required:true},
    mileage:{type:Number,required:true},
    numberPlate:{type:String,required:true},
    shortDistanceBasePrice:{type:Number,required:true},
    longDistanceBasePrice:{type:Number,required:true},
    image:{public_id:{type:String,required:true},url:{type:String,required:true}},
    availability:{type:String,required:true,default:"unbooked"},
});


const carModel=mongoose.model('cars',carSchema);

module.exports=carModel;