
const mongoose=require('mongoose');

const bookingSchema= mongoose.Schema({
    bookingStartDate:{type:Date,required:true},
    bookingEndDate:{type:Date,required:true},
    pickUp:{type:String,required:true},
    destination:{type:String,required:true},
    distance:{type:Number,required:true},
    pickUpTime:{type:String,required:true},
    dropOffTime:{type:String,required:true},
    bookingStatus:{type:String,default:'pending'},
    bookedAmount:{type:Number,default:0,required:true},
    paymentStatus:{type:String,default:'pending'},
    carId: { type: mongoose.Schema.Types.ObjectId, default: null }, 
    userId: { type: mongoose.Schema.Types.ObjectId, required: true }, 
    driverId: { type: mongoose.Schema.Types.ObjectId, default: null },
    createdAt: { type: Date, default: Date.now },    
})

const bookingModel=mongoose.model('bookings',bookingSchema);
module.exports=bookingModel;