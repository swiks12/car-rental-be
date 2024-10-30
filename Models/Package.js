const { required } = require("joi");
const mongoose=require("mongoose");


const packageSchema=mongoose.Schema(
    {
        shortDistancePackage:{type:Number,required:true},
        longDistancePackage:{type:Number,required:true},
        driverShortDistance:{type:Number,required:true},
        driverLongDistance:{type:Number,required:true},
    }
);


const packageModel=mongoose.model("packages",packageSchema);

module.exports=packageModel;