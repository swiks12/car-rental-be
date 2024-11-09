const Booking=require("../Models/Bookings");

// create bookings
const createBookings=async(req,res)=>{
    try {
        const createBooking=await Booking.create({
            bookingStartDate:req.body.bookingStartDate,
            bookingEndDate:req.body.bookingEndDate,
            pickUp:req.body.pickUp,
            destination:req.body.destination,
            distance:req.body.distance,
            pickUpTime:req.body.pickUpTime,
            dropOffTime:req.body.dropOffTime,
            userId:req.body.userId
        })
        res.status(200).json({message:"Booking first part completed!",id:createBooking._id})
    } catch (error) {
        res.status(500).json({error:error.message,message:"Internal Server Error"})
    }
}


// getBookings
const getBookings=async(req,res)=>{
    try{

        const getBooking=await Booking.find();
        if(!getBooking){
            res.status(400).json({message:"Cannot get bookings Info"})
        }
        res.json(getBooking);
    }
    catch(e){
        res.status(500).json({message:"Internal Server Error",error:error.message})
    }
}

const getIndividualBookings=async(req,res)=>{
    try{

        const getIndividualBooking=await Booking.findById(req.params.id);
        if(!getIndividualBooking){
            res.status(400).json({message:"Cannot get booking Info"})
        }
        res.json(getIndividualBookingBooking);
    }
    catch(e){
        res.status(500).json({message:"Internal Server Error",error:error.message})
    }
}


module.exports={createBookings,getBookings,getIndividualBookings};