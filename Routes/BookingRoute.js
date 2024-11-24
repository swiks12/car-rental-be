const express=require("express");
const {createBookings,getBookings, getIndividualBookings,findBookedCarIds,bookingDataUpdates,findBookedDriverId}=require("../Controllers/BookingController")

const router=express.Router();


router.post("/create",createBookings)
router.post("/get",getBookings)
router.get("/getIndividual/:bookingId",getIndividualBookings)
router.get("/getBookedCarIds/:bookingStartDate/:bookingEndDate", findBookedCarIds);
router.get("/getBookedDriverIds/:bookingStartDate/:bookingEndDate", findBookedDriverId);
router.patch("/updateBookingInfo/:bookingId",bookingDataUpdates );





module.exports=router;