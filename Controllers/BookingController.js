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
            userId:req.body.userId,
            bookingPeriod:req.body.bookingPeriod,
            budget:req.body.budget
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

        const getIndividualBooking=await Booking.findById(req.params.bookingId);
        if(!getIndividualBooking){
            res.status(400).json({message:"Cannot get booking Info"})
        }
        res.json(getIndividualBooking);
    }
    catch(e){
        res.status(500).json({message:"Internal Server Error",error:error.message})
    }
}

// find booked car Ids
const findBookedCarIds = async (req, res) => {
    try {
        // Extract parameters from the request
        const { bookingStartDate, bookingEndDate } = req.params;
        
        // Convert string dates to Date objects
        const startDate = new Date(bookingStartDate);
        const endDate = new Date(bookingEndDate);

        // Query the database for bookings that overlap with the provided dates
        const bookedCars = await Booking.find({
            $or: [
                // Case 1: The new booking starts before the existing booking ends
                { bookingStartDate: { $lte: endDate }, bookingEndDate: { $gte: startDate } },
                
                // Case 2: The new booking starts and ends within the range of an existing booking
                { bookingStartDate: { $gte: startDate, $lte: endDate } },
                
                // Case 3: The new booking ends and overlaps with an existing booking's start date
                { bookingEndDate: { $gte: startDate, $lte: endDate } }
            ]
        }).select('carId'); // Only get the carId field

        // Extract the carIds from the result
        const bookedCarIds = bookedCars.map(booking => booking.carId);

        // Return the booked carIds in the response
        res.status(200).json({ bookedCarIds });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "An error occurred while fetching booked cars" });
    }
};



// patch one for carId,bookedAmount/bookingStatus
const bookingDataUpdates=async(req,res)=>{
    try {
        const bookingDataUpdate=await Booking.findByIdAndUpdate(req.params.bookingId,{
            carId:req.body.carId,
            bookedAmount:req.body.bookedAmount,
            bookingStatus:"booked"
        })
        // res.status(200).json({message:"Booking update successfull!"})
        res.json(bookingDataUpdate);
    } catch (error) {
        res.status(500).json({message:"Internal Server Error",error:error.message})
        
    }
}

module.exports={createBookings,getBookings,getIndividualBookings,findBookedCarIds,bookingDataUpdates};